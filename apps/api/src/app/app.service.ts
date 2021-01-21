import { Book } from '@fullstack-nesjs-angular/data';
import { Injectable } from "@nestjs/common"

@Injectable()
export class AppService {
  books: Book[] = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      isbn: "9780132350884",
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andy Hunt & Dave Thomas",
      isbn: "9780132119177",
    },
    {
      title: "Working Effectively with Legacy Code",
      author: "Michael C. Feathers",
      isbn: "9780131177055",
    },
  ]

  getData(): Book[] {
    return this.books
  }
}