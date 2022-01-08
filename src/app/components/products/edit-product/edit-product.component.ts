import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsState, ProductStateEnum} from "../../../ngrx/products.reducer";
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {EditProductAction, SaveProductAction, UpdateProductAction} from "../../../ngrx/products.action";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productID:number;
  productFormGroup: FormGroup|null=null;
  state:ProductsState|null=null;
  readonly ProductStateEnum=ProductStateEnum;
  submitted: boolean=false;
  formBuilt:boolean=false;

  constructor(private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
              private router:Router,
              private store:Store<any>) {
    this.productID=activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.store.dispatch(new EditProductAction(this.productID));
    this.store.subscribe(state=>{
      this.state=state.productsState;
      if (this.state?.dataState==ProductStateEnum.LOADED) {
      /*     dynamique form groupe  *//*
        this.productFormGroup=this.formBuilder.group({});
        let data=this.state?.currentProduct;
        for (let f in data){
          // @ts-ignore
          this.productFormGroup?.addControl(f,new FormControl(data[f],Validators.required));
        }
        this.submitted=true;
*/
        if (this.state.currentProduct!=null) {
          this.productFormGroup = this.formBuilder.group({
            id: [this.state?.currentProduct?.id],
            name: [this.state?.currentProduct?.name, Validators.required],
            price: [this.state?.currentProduct?.price, Validators.required],
            quantity: [this.state?.currentProduct?.quantity, Validators.required],
            selected: [this.state?.currentProduct?.selected],
            available: [this.state?.currentProduct?.available],
          });
          this.formBuilt=true;
        }
      }
    })

  }

  onProducts() {

  }

  onUpdateProduct() {
    this.submitted=true;
    if (!this.productFormGroup?.valid) return;
    this.store.dispatch(new UpdateProductAction(this.productFormGroup?.value));
  }

  okUpdatedProduct() {
    this.router.navigateByUrl("/products");
  }
}
