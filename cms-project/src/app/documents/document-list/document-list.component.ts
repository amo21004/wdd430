import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document(1, 'My Resume', 'This document contains my resume', 'http://www.linkedin.com', null),
    new Document(2, 'My first document', 'This is my first document', 'http://www.link1.com', null),
    new Document(3, 'My second document', 'This is my second document', 'http://www.link2.com', null),
    new Document(4, 'My third document', 'This is my third document', 'http://www.link3.com', null),
    new Document(5, 'My fourth document', 'This is my fourth document', 'http://www.link4.com', null)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
