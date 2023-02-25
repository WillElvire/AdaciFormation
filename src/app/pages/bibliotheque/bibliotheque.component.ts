import { IBook } from 'src/app/interfaces/book';
import { Component } from '@angular/core';
import { FunctionService } from 'src/app/services/api/function.service';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent {

  books : IBook[] = [];

  constructor(private fs : FunctionService){

  }
  ngOnInit(): void {
    this.fs.getBooks().subscribe((response)=>{
      this.books = response as IBook[];
    })
  }

}
