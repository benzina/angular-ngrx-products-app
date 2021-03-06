import {Injectable} from "@angular/core";
import {ProductsService} from "../services/products.service";
import {
  DeleteProductErrorAction, DeleteProductSuccessAction, EditProductErrorAction, EditProductSuccessAction,
  GetAllProductsErrorAction,
  GetAllProductsSuccessAction,
  GetAvailableProductsAction,
  GetAvailableProductsErrorAction,
  GetAvailableProductsSuccessAction,
  GetSelectedProductsErrorAction,
  GetSelectedProductsSuccessAction, NewProductSuccessAction,
  ProductsActions,
  ProductsActionsTypes, SaveProductErrorAction, SaveProductSuccessAction,
  SearchProductsErrorAction,
  SearchProductsSuccessAction,
  SelectProductAction,
  SelectProductErrorAction, SelectProductSuccessAction, UpdateProductErrorAction, UpdateProductSuccessAction
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

  /* SEARCH PRODUCTS EFFECT*/
  SearchProductsEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.SEARCH_PRODUCTS),
      mergeMap((action:ProductsActions)=>{
        return this.productService.searchProducts(action.payload)
          .pipe(
            map((products)=>new SearchProductsSuccessAction(products)),
            catchError((err)=>of(new SearchProductsErrorAction(err)))
          )
      })
    )
  );

  /* SELECT PRODUCT EFFECT*/
  SelectProductEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.SELECT_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productService.selectProduct(action.payload)
          .pipe(
            map((product)=>new SelectProductSuccessAction(product)),
            catchError((err)=>of(new SelectProductErrorAction(err.message)))
          )
      })
    )
  );
  /* DELETE PRODUCT EFFECT*/
  DeleteProductEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.DELETE_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productService.deleteProduct(action.payload.id)
          .pipe(
            map(()=>new DeleteProductSuccessAction(action.payload)),
            catchError((err)=>of(new DeleteProductErrorAction(err.message)))
          )
      })
    )
  );

  /* NEW PRODUCT EFFECT*/
  NewProductEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.NEW_PRODUCT),
      map((action:ProductsActions)=>{
        return new NewProductSuccessAction({});
      })
    )
  );

  /* SAVE PRODUCT EFFECT*/
  SaveProductEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.SAVE_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productService.saveProduct(action.payload)
          .pipe(
            map((product)=>new SaveProductSuccessAction(product)),
            catchError((err)=>of(new SaveProductErrorAction(err.message)))
          )
      })
    )
  );

  /* EDIT PRODUCT EFFECT*/
  EditProductEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.EDIT_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productService.getProductById(action.payload)
          .pipe(
            map((product)=>new EditProductSuccessAction(product)),
            catchError((err)=>of(new EditProductErrorAction(err.message)))
          )
      })
    )
  );

  /* UPDATE PRODUCT EFFECT*/
  UpdateProductEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.UPDATE_PRODUCT),
      mergeMap((action:ProductsActions)=>{
        return this.productService.updateProduct(action.payload)
          .pipe(
            map((product)=>new UpdateProductSuccessAction(product)),
            catchError((err)=>of(new UpdateProductErrorAction(err.message)))
          )
      })
    )
  );

}
