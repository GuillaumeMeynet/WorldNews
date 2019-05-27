import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: 'addArticle', component: AddArticleComponent },
  { path: '', component: ArticlesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    AddArticleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
