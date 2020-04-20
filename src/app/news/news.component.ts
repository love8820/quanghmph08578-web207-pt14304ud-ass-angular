import { Component, OnInit } from '@angular/core';
import { New } from '../New';
import { NewService } from '../new.service' 
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: New[];
  constructor(
    private newService: NewService ) { }

    ngOnInit(): void {
      this.getNews();
      // this.products = this.productService.getProducts();
    }
    getNews(){
      this.newService.getNews().subscribe(data =>{
        this.news =data; 
      })
    }
 
}
