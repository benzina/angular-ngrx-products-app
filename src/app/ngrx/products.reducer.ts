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

    /* SEARCH PRODUCTS REDUCER*/
    case ProductsActionsTypes.SEARCH_PRODUCTS:
      return {...state,dataState:ProductStateEnum.LOADING}
    case ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductStateEnum.LOADED,products:(<ProductsActions> action).payload}
    case ProductsActionsTypes.SEARCH_PRODUCTS_ERROR:
      return {...state,dataState:ProductStateEnum.ERROR,products:(<ProductsActions> action).payload}

    /* SELECT PRODUCT REDUCER*/
    case ProductsActionsTypes.SELECT_PRODUCT:
      return {...state,dataState:ProductStateEnum.LOADING}
    case ProductsActionsTypes.SELECT_PRODUCT_SUCCESS:
      let product:Product=(<ProductsActions>action).payload
      let listProducts=[...state.products];
      let data:Product[]=listProducts.map(p=>p.id==product.id?product:p);
      return {...state,dataState:ProductStateEnum.LOADED,products:data}
    case ProductsActionsTypes.SELECT_PRODUCT_ERROR:
      return {...state,dataState:ProductStateEnum.ERROR,products:(<ProductsActions> action).payload}

    /* DELETE PRODUCT REDUCER*/
    case ProductsActionsTypes.DELETE_PRODUCT:
      return {...state,dataState:ProductStateEnum.LOADING}
    case ProductsActionsTypes.DELETE_PRODUCT_SUCCESS:
      let productDeleted:Product=(<ProductsActions>action).payload
      let index=state.products.indexOf(productDeleted);
      let listProductsDeleted=[...state.products];
      listProductsDeleted.splice(index,1);
      return {...state,dataState:ProductStateEnum.LOADED,products:listProductsDeleted,}
    case ProductsActionsTypes.DELETE_PRODUCT_ERROR:
      return {...state,dataState:ProductStateEnum.ERROR,products:(<ProductsActions> action).payload}

    default:return {...state}
  }
}
