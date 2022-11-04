import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  subscription: Subscription;

  documents: Document[] = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();

    this.documentService.documentSelectedEvent.emit(this.documents[0]);

    this.documentService.documentChangedEvent.subscribe(
      (documents: Document[]) => {
        this.documents = documents;
      }
    );

    this.subscription = this.documentService.documentListChangedEvent.subscribe((documentsList: Document[]) => {
      this.documents = documentsList;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
