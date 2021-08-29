import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../message.service';
import { Message } from './message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  p: number = 1;
  isDeleted: boolean = false;
  messages!: Message[];
  CreatorUserName: any;

  constructor(private actRoute: ActivatedRoute, private MessageService: MessageService, private router: Router) {
  }

  ngOnInit(): void {
    this.ReadMessages();
  }

  ReadMessages() {
    this.MessageService.getMessages().subscribe((data) => this.messages = data);
  }

  DeleteMessage(message: Message) {
    this.MessageService.deleteMessage(message.MessageId).subscribe(() => {
      this.DeleteAlert();
      this.ReadMessages();
    }, (error) => console.log(error));
  }

  Search() {
    if (this.CreatorUserName) {
      this.messages = this.messages.filter(m =>
        m.Creator.UserName.toUpperCase().includes(this.CreatorUserName.toUpperCase())
      );
    } else {
      this.ReadMessages();
    }
  }

  ViewMessage(message: Message) {
    this.router.navigate(["/MessageDetails", message.MessageId]);
  }

  key: any;
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  DeleteAlert() {
    this.isDeleted = true;
    setTimeout(() => {
      this.isDeleted = false
    }, 3000);
  }
}