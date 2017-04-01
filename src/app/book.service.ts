import { Injectable } from '@angular/core';

import { Book } from './class/book';
import { Books } from './lists/books';

@Injectable()
export class BookService {
	getBooks(): Promise<Book[]> {
		return Promise.resolve(Books);
	}
}