import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documentListChangedEvent = new Subject<Document[]>();

  documentSelectedEvent = new EventEmitter<Document>();

  documentChangedEvent = new EventEmitter<Document[]>();

  maxDocumentId: number;

  private documents: Document[] = [];

  constructor() {
    this.documents = MOCKDOCUMENTS;

    this.maxDocumentId = this.getMaxId();
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: number): Document | null {
    for (const document of this.documents) {
      if (document.id == id) {
        return document;
      }
    }

    return null;
  }

  deleteDocument(document: Document) {
    if (!document) {
      return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }
    this.documents.splice(pos, 1);

    const documentsListClone = this.documents.slice();

    this.documentListChangedEvent.next(documentsListClone);

    this.documentChangedEvent.emit(this.documents.slice());
  }

  addDocument(newDocument: Document) {
    if (newDocument == undefined || newDocument == null) {
      return
    }

    this.maxDocumentId++;

    newDocument.id = this.maxDocumentId;

    this.documents.push(newDocument);

    const documentsListClone = this.documents.slice();

    this.documentListChangedEvent.next(documentsListClone);
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if (originalDocument == undefined || originalDocument == null || newDocument == undefined || newDocument == null) {
      return;
    }

    const pos = this.documents.indexOf(originalDocument);

    if (pos < 0) {
      return;
    }

    newDocument.id = originalDocument.id;

    this.documents[pos] = newDocument;

    const documentsListClone = this.documents.slice();

    this.documentListChangedEvent.next(documentsListClone);
  }

  getMaxId(): number {
    const maxId = 0;

    for (const document of this.documents) {
      const currentId = +document.id;

      if (currentId > maxId) {
        const maxId = currentId
      }
    }

    return maxId
  }
}
