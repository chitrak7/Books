import { Book } from './class/book';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Books } from './lists/books';
import { BookService } from './book.service';
import 'rxjs/add/operator/switchMap';
@Component({
	moduleId: module.id,
	selector: 'my-book',
	templateUrl: 'html/book-detail.component.html'
})

export class BookDetailComponent implements OnInit{
	book: Book;
	books: Book[];
	constructor(private bookService:BookService, private route: ActivatedRoute, private location: Location) {  }
	
	ngOnInit():void{
		this.route.params
			.switchMap((params: Params) => this.bookService.getBook(+params['id']))
			.subscribe(book => this.book = book);
	}
}