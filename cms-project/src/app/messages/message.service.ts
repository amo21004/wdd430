import { EventEmitter, Injectable } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageChangedEvent = new EventEmitter<Message[]>();

  private messages: Message[];

  maxMessageId: number;

  constructor(private http: HttpClient) {
    this.messages = MOCKMESSAGES;
  }

  //getMessages(): Message[] {
  getMessages(): any {
    //return this.messages.slice();
    return this.http.get<Message[]>('https://cms-project-e85f6-default-rtdb.firebaseio.com/messages.json').subscribe((messages: Message[]) => {
      this.messages = messages;

      this.maxMessageId = this.getMaxId();

      this.messageChangedEvent.next(this.messages);

      this.messageChangedEvent.emit(this.messages.slice());

      return this.messages;
    }, (error: any) => {
    }
    );
  }

  storeMessages(messages: Message[]) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put('https://cms-project-e85f6-default-rtdb.firebaseio.com/messages.json', messages, { headers: headers }).subscribe(response => {

    });
  }

  getMessage(id: string): Message {
    for (const message of this.messages) {
      if (message.id == id) {
        return message;
      }
    }

    return null;
  }

  addMessage(message: Message) {
    this.messages.push(message);

    this.messageChangedEvent.emit(this.messages.slice());

    this.storeMessages(this.messages);
  }

  getMaxId(): number {
    const maxId = 0;

    for (const message of this.messages) {
      const currentId = +message.id;

      if (currentId > maxId) {
        const maxId = currentId
      }
    }

    return maxId
  }
}
