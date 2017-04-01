import {Component, OnInit} from '@angular/core';
import { Book } from "./class/book";
import { BookService } from './book.service';

@Component({
	moduleId: module.id,
	selector: 'my-preview',
	templateUrl: 'html/book-preview.component.html'
})

export class BookPreviewComponent implements OnInit{
	books: Book[];
	constructor(private bookService: BookService) { }
	getBooks():void{
		this.bookService.getBooks().then(books=> this.books = books);
	}
	ngOnInit(): void {
		this.getBooks();
	}
	
}