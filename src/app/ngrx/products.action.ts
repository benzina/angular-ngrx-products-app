import {Action} from "@ngrx/store";
import {Product} from "../models/product.model";

export enum ProductsActionsTypes{
  /* GET ALL PRODUCTS*/
  GET_ALL_PRODUCTS="[Product] Get All products",
  GET_ALL_PRODUCTS_SUCCESS="[Product] Get All products success",
  GET_ALL_PRODUCTS_ERROR="[Product] Get All products error",

  /* GET AVAILABLE PRODUCTS*/
  GET_AVAILABLE_PRODUCTS="[Product] Get Available products",
  GET_AVAILABLE_PRODUCTS_SUCCESS="[Product] Get Available products success",
  GET_AVAILABLE_PRODUCTS_ERROR="[Product] Get Available products error",

  /* GET SELECTED PRODUCTS*/
  GET_SELECTED_PRODUCTS="[Product] Get Selected products",
  GET_SELECTED_PRODUCTS_SUCCESS="[Product] Get Selected products success",
  GET_SELECTED_PRODUCTS_ERROR="[Product] Get Selected products error",

  /* SEARCH PRODUCTS*/
  SEARCH_PRODUCTS="[Product] Search products",
  SEARCH_PRODUCTS_SUCCESS="[Product] Search products success",
  SEARCH_PRODUCTS_ERROR="[Product] Search products error",

  /* SELECT PRODUCT*/
  SELECT_PRODUCT="[Products] Select product",
  SELECT_PRODUCT_SUCCESS="[Products] Select product success",
  SELECT_PRODUCT_ERROR="[Products] Select product error",

  /* DELETE PRODUCT*/
  DELETE_PRODUCT="[Product] Delete product",
  DELETE_PRODUCT_SUCCESS="[Product] Delete product success",
  DELETE_PRODUCT_ERROR="[Product] Delete product error",

  /* NEW PRODUCT*/
  NEW_PRODUCT="[Product] New product",
  NEW_PRODUCT_SUCCESS="[Product] New product success",
  NEW_PRODUCT_ERROR="[Product] New product error",

  /* SAVE PRODUCT*/
  SAVE_PRODUCT="[Product] Save product",
  SAVE_PRODUCT_SUCCESS="[Product] Save product success",
  SAVE_PRODUCT_ERROR="[Product] Save product error",

}

/* GET ALL PRODUCTS ACTIONS*/
export class GetAllProductsAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload:any) {
  }
}
export class GetAllProductsSuccessAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload:any) {
  }
}
export class GetAllProductsErrorAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

/* GET AVAILABLE PRODUCTS ACTIONS*/
export class GetAvailableProductsAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.GET_AVAILABLE_PRODUCTS;
  constructor(public payload:any) {
  }
}
export class GetAvailableProductsSuccessAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_SUCCESS;
  constructor(public payload:any) {
  }
}
export class GetAvailableProductsErrorAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

/* GET SELECTED PRODUCTS ACTIONS*/
export class GetSelectedProductsAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload:any) {
  }
}
export class GetSelectedProductsSuccessAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload:any) {
  }
}
export class GetSelectedProductsErrorAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

/* SEARCH PRODUCTS ACTIONS*/
export class SearchProductsAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS;
  constructor(public payload:any) {
  }
}
export class SearchProductsSuccessAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload:any) {
  }
}
export class SearchProductsErrorAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

/* SELECT PRODUCT ACTIONS*/
export class SelectProductAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT;
  constructor(public payload:Product) {
  }
}
export class SelectProductSuccessAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT_SUCCESS;
  constructor(public payload:Product) {
  }
}
export class SelectProductErrorAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.SELECT_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}

/* DELETE PRODUCT ACTIONS*/
export class DeleteProductAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT;
  constructor(public payload:Product) {
  }
}
export class DeleteProductSuccessAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT_SUCCESS;
  constructor(public payload:Product) {
  }
}
export class DeleteProductErrorAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}

/* NEW PRODUCT ACTIONS*/
export class NewProductAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.NEW_PRODUCT;
  constructor(public payload:any) {
  }
}
export class NewProductSuccessAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.NEW_PRODUCT_SUCCESS;
  constructor(public payload:any) {
  }
}
export class NewProductErrorAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.NEW_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}


/* SAVE PRODUCT ACTIONS*/
export class SaveProductAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCT;
  constructor(public payload:Product) {
  }
}
export class SaveProductSuccessAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCT_SUCCESS;
  constructor(public payload:Product) {
  }
}
export class SaveProductErrorAction implements Action{
  type:ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCT_ERROR;
  constructor(public payload:string) {
  }
}


export type ProductsActions=
  GetAllProductsAction | GetAllProductsSuccessAction | GetAllProductsErrorAction
  |GetAvailableProductsAction | GetAvailableProductsSuccessAction | GetAvailableProductsErrorAction
  |GetSelectedProductsAction | GetSelectedProductsSuccessAction | GetSelectedProductsErrorAction
  |SearchProductsAction | SearchProductsSuccessAction | SearchProductsErrorAction
  |SelectProductAction | SelectProductSuccessAction | SelectProductErrorAction
  |DeleteProductAction | DeleteProductSuccessAction | DeleteProductErrorAction
  |NewProductAction | NewProductSuccessAction | NewProductErrorAction
  |SaveProductAction | SaveProductSuccessAction | SaveProductErrorAction



  ;
