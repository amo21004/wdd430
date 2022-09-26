import { Component, Input, OnInit } from '@angular/core';
import { MessageListComponent } from '../message-list/message-list.component';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() message: Message = (new MessageListComponent).messages[0];

  constructor() {/*this.message = new Message(1, '', '', '')*/}

  ngOnInit(): void {
  }

}
