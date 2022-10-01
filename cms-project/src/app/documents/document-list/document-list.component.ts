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
    new Document(2, 'My Alternative Resume', 'This document contains my alternative resume', 'http://www.linkedin.com', null),
    new Document(3, 'My Resume', 'This document contains my resume', 'http://www.linkedin.com', null),
    new Document(4, 'My Alternative Resume', 'This document contains my alternative resume', 'http://www.linkedin.com', null),
    new Document(5, 'My Resume', 'This document contains my resume', 'http://www.linkedin.com', null)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
