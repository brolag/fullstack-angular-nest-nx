import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '@fullstack-nesjs-angular/data';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private booksSubject: BehaviorSubject<Book[]>

  constructor(private http: HttpClient) { 
    this.booksSubject = new BehaviorSubject(null)
  }

  public get books$() {
    return this.booksSubject.asObservable();
  }

  public loadBooks() {
    this.http.get('/api/books').subscribe((books: Book[]) => {
      if (books) {
        this.booksSubject.next(books)
      }
    })
  }
}
