import {Product} from "../models/product.model";
import {ProductsActions, ProductsActionsTypes} from "./products.action";
import {Action} from "@ngrx/store";
export enum ProductStateEnum{
  LOADING="loading",
  LOADED="loaded",
  ERROR="error",
  INITIAL="initial"
}
export interface ProductsState{
  products:Product[],
  errorMessage:string,
  dataState:ProductStateEnum
}
const initState:ProductsState={
  products:[],
  dataState:ProductStateEnum.INITIAL,
  errorMessage:""
}
export function productsReducer(state:ProductsState=initState,action:Action):ProductsState {
  switch (action.type){
    /* GET ALL PRODUCTS REDUCER*/
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
      return {...state,dataState:ProductStateEnum.LOADING}
    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductStateEnum.LOADED,products:(<ProductsActions> action).payload}
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state,dataState:ProductStateEnum.ERROR,products:(<ProductsActions> action).payload}
    /* GET AVAILABLE PRODUCTS REDUCER*/
    case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS:
      return {...state,dataState:ProductStateEnum.LOADING}
    case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductStateEnum.LOADED,products:(<ProductsActions> action).payload}
    case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR:
      return {...state,dataState:ProductStateEnum.ERROR,products:(<ProductsActions> action).payload}

    /* GET SELECTED PRODUCTS REDUCER*/
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
      return {...state,dataState:ProductStateEnum.LOADING}
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductStateEnum.LOADED,products:(<ProductsActions> action).payload}
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state,dataState:ProductStateEnum.ERROR,products:(<ProductsActions> action).payload}

    default:return {...state}
  }
}
