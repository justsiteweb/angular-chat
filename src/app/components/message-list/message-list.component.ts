import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  messages!: Message[];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.getLastMessages().subscribe((messages: Message[]) => {
      console.log(messages)
      this.messages = messages;
    });
  }
}
