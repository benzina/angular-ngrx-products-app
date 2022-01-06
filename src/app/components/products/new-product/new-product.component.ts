import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsState, ProductStateEnum} from "../../../ngrx/products.reducer";
import {Store} from "@ngrx/store";
import {NewProductAction, SaveProductAction} from "../../../ngrx/products.action";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productFormGroup: FormGroup|null=null;
  state:ProductsState|null=null;
  readonly ProductStateEnum=ProductStateEnum;
  submitted: boolean=false;
  constructor(private formBuilder:FormBuilder,
              private store:Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new NewProductAction({}));
    this.store.subscribe(state=>{
      this.state=state.productsState;
      if (this.state?.dataState==ProductStateEnum.NEW){
        this.productFormGroup=this.formBuilder.group({
          name:["",Validators.required],
          price:[0,Validators.required],
          quantity:[0,Validators.required],
          selected:[true,Validators.required],
          available:[true,Validators.required],
        })
      }
    })

  }

  onSaveProduct() {
    this.store.dispatch(new SaveProductAction(this.productFormGroup?.value));
  }

  newProduct() {
    this.store.dispatch(new NewProductAction({}));
  }
}
