import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private nicknameKey = 'nickname';

  getNickname(): string {
    return localStorage.getItem(this.nicknameKey) || 'Anonymous';
  }

  setNickname(nickname: string): void {
    localStorage.setItem(this.nicknameKey, nickname);
  }
}
