import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Message } from '../models/message.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messagesCollection = this.firestore.collection<Message>('messages', ref => ref.orderBy('timestamp', 'desc').limit(10));

  constructor(private firestore: AngularFirestore) { }

  getLastMessages() {
    return this.messagesCollection.snapshotChanges().pipe(
      map(actions => actions.map(action => {
        const data = action.payload.doc.data() as Omit<Message, 'id'>;
        const id = action.payload.doc.id;
        return { id, ...data } as Message;
      }).reverse())
    );
  }



  addMessage(author: string, content: string): void {
    const timestamp = new Date();
    const newMessageRef = this.messagesCollection.ref.doc();
    const message: Message = { id: newMessageRef.id, author, content, timestamp };  
    newMessageRef.set(message);
    // const message: Message = { id:"", author, content, timestamp };
    // this.messagesCollection.add(message);
  }

  updateMessage(messageId: string, newContent: string): void {
    console.log(messageId)
    this.messagesCollection.doc(messageId).update({ content: newContent });
  }

  deleteMessage(messageId: string): void {
    console.log(messageId)
    this.messagesCollection.doc(messageId).delete();
  }

  // generateId(): string {
  //   return '_' + Math.random().toString(36).substr(2, 9);
  // }


}
