import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from '@fullstack-nesjs-angular/data';
import { Observable } from 'rxjs';


@Component({
  selector: 'fullstack-nesjs-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public books$: Observable<Book[]>

  constructor(private booksService: BooksService) {
    this.books$ = this.booksService.books$
  }

  ngOnInit() {
    this.booksService.loadBooks()
  }
}
