import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles;
  @ViewChild('searchArticleForm') searchArticleForm: NgForm;
  constructor() { }

  onKeyUpEvent() {
    console.log('key pressed');
    this.searchArticleForm.ngSubmit.emit();
  }

  searchArticle(form: NgForm) {
    console.log(form.value);
  }
  ngOnInit() {
  }

}
