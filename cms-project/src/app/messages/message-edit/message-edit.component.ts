import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  currentSender: string = 'Naif Amoodi';
  @ViewChild('subject') subjectInputRef: ElementRef = new ElementRef('');
  @ViewChild('msgText') msgTextInputRef: ElementRef = new ElementRef('');
  @Output() addMessageEvent = new EventEmitter<Message>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSendMessage() {
    const messageSubject = this.subjectInputRef.nativeElement.value;

    const messageText = this.msgTextInputRef.nativeElement.value;

    const newMessage = new Message(1, messageSubject, messageText, this.currentSender);

    this.addMessageEvent.emit(newMessage);

    this.subjectInputRef.nativeElement.value = '';

    this.msgTextInputRef.nativeElement.value = '';
  }

  onClear() {
    this.subjectInputRef.nativeElement.value = '';

    this.msgTextInputRef.nativeElement.value = '';
  }

}
