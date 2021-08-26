import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NamesFormControl } from '../../SharedComponents/input/custom-formControls';
import { MessageService } from '../message.service';
import { Message } from '../message/message';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent implements OnInit {

  messageForm = new FormGroup({
    reply!: new NamesFormControl('',
      [
        Validators.required, Validators.minLength(2),
        Validators.maxLength(10000)
      ])
  });

  messageId!: number;
  message!: Message;
  isReplied:boolean=true

  constructor(private router:Router ,private actRoute: ActivatedRoute, private MessageService: MessageService) {
    this.messageId = this.actRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.readMessage();
  }

  readMessage() {
    this.MessageService.getMessage(this.messageId).subscribe((data) => this.message = data);
  }

  setMessageStatusToAnswered(message:Message){
    message.Reply = this.messageForm.controls.reply.value;
    message.Answered = true;
    this.MessageService.editMessage(message).subscribe( ()=> this.router.navigate(['/Messages',this.isReplied]));
  }

}
