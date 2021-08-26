import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {

  @Input() Control!: FormControl | any;
  @Input() PlaceHolder!: string;

  constructor() { }

  ngOnInit(): void {
  }

  showErrors(){
    return this.Control.errors && (this.Control.touched || this.Control.dirty)
   }

}
