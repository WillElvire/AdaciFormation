import { IBook } from 'src/app/interfaces/book';
import { FunctionService } from './../../../services/api/function.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  @Input() books!:IBook[];

  constructor(private fs : FunctionService){

  }
  ngOnInit(): void {
    this.fs.getBooks().subscribe((response)=>{
      this.books = response as IBook[];
    })
  }



}
