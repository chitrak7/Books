import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService{
	createDb(){
		let books = [
			{ id: 0, title: 'fasdfads', author: 'fasdfasf', category: 'asdffaf', price: 445, description: 'fasfdasff' },
			{ id: 1, title: 'fasdfads', author: 'fasdfasf', category: 'asdffaf', price: 445, description: 'fasfdasff' },
			{ id: 2, title: 'fasdfads', author: 'fasdfasf', category: 'asdffaf', price: 445, description: 'fasfdasff' },
			{ id: 3, title: 'fasdfads', author: 'fasdfasf', category: 'asdffaf', price: 445, description: 'fasfdasff' },
			{ id: 4, title: 'fasdfads', author: 'fasdfasf', category: 'asdffaf', price: 445, description: 'fasfdasff' },
			{ id: 5, title: 'fasdfads', author: 'fasdfasf', category: 'asdffaf', price: 445, description: 'fasfdasff' },
			{ id: 6, title: 'fasdfads', author: 'fasdfasf', category: 'asdffaf', price: 445, description: 'fasfdasff' },
			{ id: 7, title: 'fasdfads', author: 'fasdfasf', category: 'asdffaf', price: 445, description: 'fasfdasff' },
		];
		return { books };
	}

}