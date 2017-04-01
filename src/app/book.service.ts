import { Injectable } from '@angular/core';

import { Book } from './class/book';
import { Books } from './lists/books';

@Injectable()
export class BookService {
	getBooks(): Promise<Book[]> {
		return Promise.resolve(Books);
	}

	getBook(id:Number):Promise<Book>{
		return this.getBooks().then(books => books.find(book=> book.id === id));
	}

}