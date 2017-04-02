import { Component } from '@angular/core';
import { BookService } from './book.service';
import { Book } from "./class/book";
@Component({
	selector: 'new-book',
	moduleId: module.id,
	templateUrl: 'html/new-book.component.html',
})
export class NewBookComponent{
	book: Book;
	constructor(private bookService: BookService){}

	add(title: String, author: String, category: String, price: String, description: String): void {
		title = title.trim();
		author = author.trim();
		category = category.trim();
		description = description.trim();
		price = price.trim();
		if(!title){
			alert("Please Give Title");
			return;
		}
		if (!description) {
			alert("Please Give Description");
			return;
		}
		if (!price) {
			alert("Please Give Price");
			return;
		}
		if (!category) {
			alert("Please Give Category");
			return;
		}
		if (!author) {
			alert("Please Give Author");
			return;
		}
		this.bookService.create(title, author, category, +price, description)
			.then(book => { this.book = book, alert(this.book.title + " added"); });

	}
}