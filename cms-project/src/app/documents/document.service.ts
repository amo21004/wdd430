import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documentListChangedEvent = new Subject<Document[]>();

  documentSelectedEvent = new EventEmitter<Document>();

  documentChangedEvent = new EventEmitter<Document[]>();

  maxDocumentId: number;

  private documents: Document[] = [];

  constructor(private http: HttpClient) {
    this.documents = MOCKDOCUMENTS;

    this.maxDocumentId = this.getMaxId();
  }

  getDocuments(): any {
    //return this.documents.slice();
    return this.http.get<Document[]>('https://cms-project-e85f6-default-rtdb.firebaseio.com/documents.json').subscribe((documents: Document[]) => {
      this.documents = documents;

      this.maxDocumentId = this.getMaxId();

      this.documents.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        else if (a.name > b.name) {
          return 1;
        }

        return 0;
      });

      this.documentListChangedEvent.next(this.documents);

      this.documentChangedEvent.emit(this.documents.slice());

      return this.documents;
    }, (error: any) => {
    }
    );
  }

  storeDocuments(documents: Document[]) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put('https://cms-project-e85f6-default-rtdb.firebaseio.com/documents.json', documents, { headers: headers }).subscribe(response => {
      this.documentListChangedEvent.next(this.documents);
    });
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

    //this.documentChangedEvent.emit(this.documents.slice());
    this.storeDocuments(documentsListClone);
  }

  addDocument(newDocument: Document) {
    if (newDocument == undefined || newDocument == null) {
      return
    }

    this.maxDocumentId++;

    newDocument.id = this.maxDocumentId;

    this.documents.push(newDocument);

    const documentsListClone = this.documents.slice();

    //this.documentListChangedEvent.next(documentsListClone);
    this.storeDocuments(documentsListClone);
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

    //this.documentListChangedEvent.next(documentsListClone);
    this.storeDocuments(documentsListClone);
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
