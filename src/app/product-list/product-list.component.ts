import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[]; 
  constructor(
    private productService: ProductService ) { }



  ngOnInit(): void {
    this.getProducts();
    // this.products = this.productService.getProducts();
  }
  getProducts(){
    this.productService.getProducts().subscribe(data =>{
      this.products =data; 
    })
  }

  removeItem(id){
    this.productService.removeProduct(id).subscribe(response => {
     this.products = this.products.filter(product => product.id != response.id);
   })
  }
  // page = 1;
  // pageSize = 10;
  // collectionSize = Product.length;

  // get product(): Product[] {
  //   return Product
  //     .map((products, i) => ({id: i + 1, ...products}))
  //     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  // }

}
