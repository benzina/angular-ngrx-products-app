import {Injectable} from "@angular/core";
import {ProductsService} from "../services/products.service";
import {
  GetAllProductsErrorAction,
  GetAllProductsSuccessAction,
  GetAvailableProductsAction,
  GetAvailableProductsErrorAction,
  GetAvailableProductsSuccessAction, GetSelectedProductsErrorAction, GetSelectedProductsSuccessAction,
  ProductsActions,
  ProductsActionsTypes
} from "./products.action";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";

@Injectable()
export class ProductsEffects {
  constructor(private productService:ProductsService,private effectActions:Actions) {
  }
  /* GET ALL PRODUCTS EFFECT*/
  GetAllProductsEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
      mergeMap((action)=>{
        return this.productService.getAllProducts()
          .pipe(
            map((products)=>new GetAllProductsSuccessAction(products)),
            catchError((err)=>of(new GetAllProductsErrorAction(err)))
          )
      })
    )
  );

  /* GET AVAILABLE PRODUCTS EFFECT*/
  GetAvailableProductsEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_AVAILABLE_PRODUCTS),
      mergeMap((action)=>{
        return this.productService.getAvailableProducts()
          .pipe(
            map((products)=>new GetAvailableProductsSuccessAction(products)),
            catchError((err)=>of(new GetAvailableProductsErrorAction(err)))
          )
      })
    )
  );

  /* GET SELECTED PRODUCTS EFFECT*/
  GetSelectedProductsEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action)=>{
        return this.productService.getSelectedProducts()
          .pipe(
            map((products)=>new GetSelectedProductsSuccessAction(products)),
            catchError((err)=>of(new GetSelectedProductsErrorAction(err)))
          )
      })
    )
  );
}
