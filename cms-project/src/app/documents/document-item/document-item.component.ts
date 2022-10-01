import { Component, OnInit, Input } from '@angular/core';
import { DocumentListComponent } from '../document-list/document-list.component';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})
export class DocumentItemComponent implements OnInit {
  @Input() document: Document = (new DocumentListComponent).documents[0];

  constructor() { }

  ngOnInit(): void {
  }

}
