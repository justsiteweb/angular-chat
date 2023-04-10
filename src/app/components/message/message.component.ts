import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ChatService } from '../../services/chat.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() message!: Message;

  constructor(private userService: UserService, private chatService: ChatService) {}

  isAuthor(): boolean {
    // console.log(this.message)
    return this.userService.getNickname() === this.message.author;
  }

  editMessage(): void {
    const newContent = prompt('Edit your message:', this.message.content);
    if (newContent !== null && newContent.trim() !== '') {
      console.log(this.message.id)
      this.chatService.updateMessage(this.message.id, newContent);
    }
  }

  deleteMessage(): void {
    if (confirm('Are you sure you want to delete this message?')) {
      console.log(this.message.id)
      this.chatService.deleteMessage(this.message.id);
    }
  }
}
