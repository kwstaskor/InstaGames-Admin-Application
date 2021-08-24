import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../CategoryComponents/category/category';
import { CategoryService } from '../../CategoryComponents/category/category.service';
import { Developer } from '../../DeveloperComponents/developer/developer';
import { DeveloperService } from '../../DeveloperComponents/developer/developer.service';
import { Game, Pegi } from '../game/game';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {
  title!: string;
  description!: string;
  photo!: string;
  trailer!: string;
  tag!: string;
  releaseDate!: Date;
  pegiId!: any;
  isReleased!: boolean;
  isEarlyAccess!: boolean;
  gameCategories!: Array<number>;
  gameDevelopers!: Array<number>;

  isSubmitted = false;
  Categories!: Category[];
  Developers!: Developer[];
  Pegilist!: Pegi[];
  constructor(private GameService: GameService, private CategoryService: CategoryService, private DeveloperService: DeveloperService,private router:Router) { }

  ngOnInit(): void {
    this.ReadCategories();
    this.ReadPegi();
    this.ReadDevelopers();
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

  CreateGame() {
    this.isSubmitted = true;
    let game = <Game>{};
    game.Title = this.title
    game.Description = this.description;
    game.Photo = this.photo;
    game.ReleaseDate = this.releaseDate;
    game.Trailer = this.trailer;
    game.IsEarlyAccess = this.isEarlyAccess;
    game.IsReleased = this.isReleased;
    game.Tag = this.tag;
    game.GameDevelopers = this.gameDevelopers;
    game.GameCategories = this.gameCategories;
    game.Pegi = <Pegi>{PegiId:this.pegiId};

    this.GameService.createGame(game).subscribe(() => {
      this.router.navigate(["/Game"]);
    });
  }

}
