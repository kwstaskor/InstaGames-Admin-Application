import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';
import { Message } from '../message/message';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent implements OnInit {

  messageId!: number;
  message!: Message;

  constructor(private actRoute: ActivatedRoute, private MessageService: MessageService) {
    this.messageId = this.actRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.readMessage();
  }

  readMessage() {
    this.MessageService.getMessage(this.messageId).subscribe((data) => this.message = data);
  }

  setMessageStatusToAnswered(message:Message){
    message.Answered = true;
    this.MessageService.editMessage(message).subscribe((data)=>console.log(data));
  }

}
