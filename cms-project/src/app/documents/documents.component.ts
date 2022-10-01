import { Component, OnInit } from '@angular/core';
import { DocumentListComponent } from './document-list/document-list.component';
import { Document } from './document.model';

@Component({
  selector: 'cms-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  selectedDocument: Document = (new DocumentListComponent).documents[0];

  constructor() { }

  ngOnInit(): void {
  }

}
