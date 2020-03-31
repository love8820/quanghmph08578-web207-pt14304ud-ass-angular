import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service'
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  products: Product[];
  constructor(
    private productService: ProductService ) { }

  ngOnInit(): void {
    this.getProducts();
  } 
  getProducts(){
    this.productService.getProducts().subscribe(data =>{
      this.products =data; 
  })
  }
}
