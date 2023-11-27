// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-viewbook',
//   templateUrl: './viewbook.component.html',
//   styleUrls: ['./viewbook.component.css']
// })
// export class ViewbookComponent {

// }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
  books: any[] = [];
  book!:Book;
  allbooks:Book[]=[];
  constructor(private http: HttpClient,
    public bookService :BookService) {}

  ngOnInit(): void {
    this.fetchBooks();
  }
 
  fetchBooks(): void {
    this.http.get<any[]>('http://localhost:5199/api/books').subscribe(
      (data) => {
        this.books = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching books:', error);
        // Handle error scenarios or show error message to the user
      }
    );
  }
  deleteBook(bookid: number): void {
    this.bookService.delete(bookid).subscribe(
      () => {
        console.log('Book deleted successfully');
        alert("Book deleted successfully")
        this.allbooks = this.allbooks.filter((book: { bookid: number; }) => book.bookid !== bookid);
      },
      (error) => {
        console.error('Error deleting book:', error);
      }
    );
}
}
