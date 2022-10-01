import { Component, OnInit, Input } from '@angular/core';
import { DocumentListComponent } from '../document-list/document-list.component';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  @Input() document: Document = (new DocumentListComponent).documents[0];

  constructor() { }

  ngOnInit(): void {
  }

}
