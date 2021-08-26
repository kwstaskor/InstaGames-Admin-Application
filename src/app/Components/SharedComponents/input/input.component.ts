import { Component, OnInit ,Input} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

@Input() Control!:FormControl|any;
@Input() PlaceHolder!:string;

  constructor() { }

  ngOnInit(): void {
    
  }

showErrors(){
 return this.Control.errors && (this.Control.touched || this.Control.dirty)
}

}
