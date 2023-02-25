import { Injectable } from "@angular/core";
import { HttpService } from "./api.service";
import { IBook } from "src/app/interfaces/book";
import { url_path } from "src/app/constants/app.constant";

@Injectable({
  providedIn : 'root'
})
export class FunctionService {

  constructor(private httpService : HttpService ) {  }

  setBook(book : IBook) {
   return this.httpService.post({endpoint : url_path.BOOK_BASE,data : book});
  }

  updateBook(book : IBook) {
    return this.httpService.put({endpoint : url_path.BOOK_BASE,data : book});
  }

  getBooks() {
   return this.httpService.get(url_path.BOOK_BASE);
  }

  deleteBook(id : string) {
    return this.httpService.delete(`${url_path.BOOK_BASE}/${id}`);
  }



}
