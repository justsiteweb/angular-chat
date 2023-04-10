import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent {
  message!: string;

  constructor(private userService: UserService, private chatService: ChatService) {}

  sendMessage(): void {
    if (this.message && this.message.trim() !== '') {
      this.chatService.addMessage(this.userService.getNickname(), this.message);
      this.message = '';
    }
  }
}
