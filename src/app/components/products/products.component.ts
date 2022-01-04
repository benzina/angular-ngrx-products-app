import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ProductsState, ProductStateEnum} from "../../ngrx/products.reducer";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsState$:Observable<ProductsState> |null=null;
  readonly ProductStateEnum=ProductStateEnum;
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.productsState$=this.store.pipe(
      map((state)=> state.productsState)
    );
  }

}
