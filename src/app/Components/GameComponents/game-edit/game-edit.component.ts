import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../CategoryComponents/category/category';
import { CategoryService } from '../../CategoryComponents/category/category.service';
import { Developer } from '../../DeveloperComponents/developer/developer';
import { DeveloperService } from '../../DeveloperComponents/developer/developer.service';
import { NamesFormControl } from '../../SharedComponents/input/custom-formControls';
import { Game, Pegi } from '../game/game';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {

  gameId!: number;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  gameEdit = new FormGroup({
    title: new NamesFormControl('',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern("[a-zA-Z ]*")
      ]),
    description!: new NamesFormControl('',
      [
        Validators.required, Validators.minLength(2),
        Validators.maxLength(10000),
      ]),
    trailer: new FormControl(''),
    photo: new FormControl('',
      [
      ]),
    pegi: new FormControl('',
      [
        Validators.required
      ]),
    categories: new FormControl('',
      [
        Validators.required
      ]),
    tag: new FormControl('',
      [
        Validators.required
      ]),
    releaseDate: new FormControl('',
      [
        Validators.required,
        Validators.min(1950),
        Validators.max(2100)
      ]),
    developers: new FormControl('',
      [
        Validators.required
      ]),
    gameUrl: new FormControl(''),
    isReleased: new FormControl(''),
    isEarlyAccess!: new FormControl('')
  });

  Categories!: Category[];
  Developers!: Developer[];
  Pegilist!: Pegi[];

  constructor(private GameService: GameService,
    private CategoryService: CategoryService,
    private DeveloperService: DeveloperService,
    private router: Router,
    private actRouter: ActivatedRoute) {
    this.gameId = this.actRouter.snapshot.params['id'];
    this.readGame();
  }

  ngOnInit(): void {
    this.ReadCategories();
    this.ReadPegi();
    this.ReadDevelopers();


    this.selectedItems = [

    ];

  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  ReadCategories() {
    this.CategoryService.getCategories().subscribe((data) => this.Categories = data);
  }

  ReadDevelopers() {
    this.DeveloperService.getDevelopers().subscribe((data) => this.Developers = data);
  }

  ReadPegi() {
    this.GameService.getPegi().subscribe((data) => this.Pegilist = data);
  }

  public uploadFinished = (event: any) => {
    this.gameEdit.controls.photo.setValue("/Content/images/Games/" + event);
  }

  trailerUploadFinished = (event: any) => {
    this.gameEdit.controls.trailer.setValue("/Content/video/" + event)
  }

  readGame() {
    this.GameService.getGame(this.gameId).subscribe(data => {

      this.gameEdit.controls.title.setValue(data.Title)
      this.gameEdit.controls.description.setValue(data.Description)
      this.gameEdit.controls.photo.setValue(data.Photo)
      this.gameEdit.controls.releaseDate.setValue(data.ReleaseDate)
      this.gameEdit.controls.trailer.setValue(data.Trailer)
      this.gameEdit.controls.isEarlyAccess.setValue(data.IsEarlyAccess)
      this.gameEdit.controls.isReleased.setValue(data.IsReleased)
      this.gameEdit.controls.tag.setValue(data.Tag)
      this.gameEdit.controls.pegi.setValue(data.PegiId)
      this.gameEdit.controls.gameUrl.setValue(data.GameUrl)
      this.gameEdit.controls.categories.setValue(data.SelectedCategories)
      this.gameEdit.controls.developers.setValue(data.SelectedDevelopers)
      console.log(data);
      console.log(this.gameEdit.controls.categories);

    });
  }

  isEdited: boolean = false;
  editGame() {

    let game = <Game>{};
    game.GameId = this.gameId;
    game.Title = this.gameEdit.controls.title.value;
    game.Description = this.gameEdit.controls.description.value;
    game.Photo = this.gameEdit.controls.photo.value;
    game.ReleaseDate = this.gameEdit.controls.releaseDate.value;

    if (this.gameEdit.controls.trailer.value) {
      game.Trailer = this.gameEdit.controls.trailer.value;
    } else {
      game.Trailer = null;
    }

    if (this.gameEdit.controls.isEarlyAccess.value) {
      game.IsEarlyAccess = this.gameEdit.controls.isEarlyAccess.value;
    } else {
      game.IsEarlyAccess = false;
    }

    if (this.gameEdit.controls.isReleased.value) {
      game.IsReleased = this.gameEdit.controls.isReleased.value;
    } else {
      game.IsReleased = false;
    }

    game.Tag = this.gameEdit.controls.tag.value;

    game.GameCategories = new Array;
    for (const cat of this.gameEdit.controls.categories.value) {
      game.GameCategories.push(<Category>{ CategoryId: cat })
    }

    game.GameDevelopers = new Array;
    for (const dev of this.gameEdit.controls.developers.value) {
      game.GameDevelopers.push(<Developer>{ DeveloperId: dev })
    }

    game.Pegi = <Pegi>{ PegiId: this.gameEdit.controls.pegi.value };
    game.GameUrl = this.gameEdit.controls.gameUrl.value;

    this.GameService.updateGame(game).subscribe(() => {
      this.isEdited=true;
      setTimeout(() => {
        this.router.navigate(['/Games']);
      }, 1250);
    });
  }

  showErrors() {
    return this.gameEdit.errors && (this.gameEdit.touched || this.gameEdit.dirty)
  }




}
