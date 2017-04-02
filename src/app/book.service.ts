import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Book } from './class/book';
import { Books } from './lists/books';

@Injectable()
export class BookService {
	private booksUrl = 'api/books';
	private headers = new Headers({ 'Content-Type': 'application/json' });
	constructor(private http: Http) {}
	getBooks(): Promise<Book[]> {
		return this.http.get(this.booksUrl)
			.toPromise().then(res => res.json().data as Book[])
			.catch(this.handleError);
	}

	getBook(id:Number):Promise<Book>{
		const url = `${this.booksUrl}/${id}`;
		return this.http.get(url).toPromise().then(res => res.json().data as Book).catch(this.handleError)
	}
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
	create(title: String, author: String, category: String, price: Number, description: String): Promise<Book> {
		return this.http
			.post(this.booksUrl, JSON.stringify({ title: title, author: author, category: category, price: price, description: description }), { headers: this.headers })
			.toPromise()
			.then(res => res.json().data as Book)
			.catch(this.handleError);
	}

}