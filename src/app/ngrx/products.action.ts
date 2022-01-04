import {Action} from "@ngrx/store";

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

export type ProductsActions=
  GetAllProductsAction | GetAllProductsSuccessAction | GetAllProductsErrorAction
  |GetAvailableProductsAction | GetAvailableProductsSuccessAction | GetAvailableProductsErrorAction
  |GetSelectedProductsAction | GetSelectedProductsSuccessAction | GetSelectedProductsErrorAction

  ;
