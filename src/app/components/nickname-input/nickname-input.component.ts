import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nickname-input',
  templateUrl: './nickname-input.component.html',
  styleUrls: ['./nickname-input.component.scss']
})
export class NicknameInputComponent {
  nickname: string;

  constructor(private userService: UserService) {
    this.nickname = userService.getNickname();
  }

  updateNickname(): void {
    this.userService.setNickname(this.nickname);
  }
}
