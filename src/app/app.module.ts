import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BookComponent } from './components/shared/book/book.component';
import { BibliothequeComponent } from './pages/bibliotheque/bibliotheque.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ListBookComponent } from './components/shared/list-book/list-book.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookComponent,
    BibliothequeComponent,
    NotFoundComponent,
    LoginComponent,
    ListBookComponent,
    RegisterComponent,
    AdminLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
