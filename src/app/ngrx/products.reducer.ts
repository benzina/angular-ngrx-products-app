import {Product} from "../models/product.model";
import {ProductsActions, ProductsActionsTypes} from "./products.action";
import {Action} from "@ngrx/store";
export enum ProductStateEnum{
  LOADING="loading",
  LOADED="loaded",
  ERROR="error",
  INITIAL="initial",
  NEW="NEW",
  EDIT="EDIT",
  UPDATED="UPDATED"
}
export interface ProductsState{
  products:Product[],
  errorMessage:string,
  dataState:ProductStateEnum,
  currentProduct:Product|null,
  currentAction:ProductsActions|null
}
const initState:ProductsState={
  products:[],
  dataState:ProductStateEnum.INITIAL,
  errorMessage:"",
  currentProduct:null,
  currentAction:null,

}
export function productsReducer(state:ProductsState=initState,action:Action):ProductsState {
  switch (action.type){
    /* GET ALL PRODUCTS REDUCER*/
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
      return {...state,dataState:ProductStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductStateEnum.LOADED,products:(<ProductsActions> action).payload,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state,dataState:ProductStateEnum.ERROR,products:(<ProductsActions> action).payload,currentAction:<ProductsActions>action}
    /* GET AVAILABLE PRODUCTS REDUCER*/
    case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS:
      return {...state,dataState:ProductStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductStateEnum.LOADED,products:(<ProductsActions> action).payload,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR:
      return {...state,dataState:ProductStateEnum.ERROR,products:(<ProductsActions> action).payload,currentAction:<ProductsActions>action}

    /* GET SELECTED PRODUCTS REDUCER*/
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
      return {...state,dataState:ProductStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductStateEnum.LOADED,products:(<ProductsActions> action).payload,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state,dataState:ProductStateEnum.ERROR,products:(<ProductsActions> action).payload,currentAction:<ProductsActions>action}

    /* SEARCH PRODUCTS REDUCER*/
    case ProductsActionsTypes.SEARCH_PRODUCTS:
      return {...state,dataState:ProductStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS:
      return {...state,dataState:ProductStateEnum.LOADED,products:(<ProductsActions> action).payload,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.SEARCH_PRODUCTS_ERROR:
      return {...state,dataState:ProductStateEnum.ERROR,products:(<ProductsActions> action).payload,currentAction:<ProductsActions>action}

    /* SELECT PRODUCT REDUCER*/
    case ProductsActionsTypes.SELECT_PRODUCT:
      return {...state,dataState:ProductStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.SELECT_PRODUCT_SUCCESS:
      let product:Product=(<ProductsActions>action).payload
      let listProducts=[...state.products];
      let data:Product[]=listProducts.map(p=>p.id==product.id?product:p);
      return {...state,dataState:ProductStateEnum.LOADED,products:data,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.SELECT_PRODUCT_ERROR:
      return {...state,dataState:ProductStateEnum.ERROR,products:(<ProductsActions> action).payload,currentAction:<ProductsActions>action}

    /* DELETE PRODUCT REDUCER*/
    case ProductsActionsTypes.DELETE_PRODUCT:
      return {...state,dataState:ProductStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.DELETE_PRODUCT_SUCCESS:
      let productDeleted:Product=(<ProductsActions>action).payload
      let index=state.products.indexOf(productDeleted);
      let listProductsDeleted=[...state.products];
      listProductsDeleted.splice(index,1);
      return {...state,dataState:ProductStateEnum.LOADED,products:listProductsDeleted,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.DELETE_PRODUCT_ERROR:
      return {...state,dataState:ProductStateEnum.ERROR,products:(<ProductsActions> action).payload,currentAction:<ProductsActions>action}

    /* NEW PRODUCT REDUCER*/
    case ProductsActionsTypes.NEW_PRODUCT:
      return {...state,dataState:ProductStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.NEW_PRODUCT_SUCCESS:
      return {...state,dataState:ProductStateEnum.NEW,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.NEW_PRODUCT_ERROR:
      return {...state,dataState:ProductStateEnum.ERROR,products:(<ProductsActions> action).payload,currentAction:<ProductsActions>action}


    /* SAVE PRODUCT REDUCER*/
    case ProductsActionsTypes.SAVE_PRODUCT:
      return {...state,dataState:ProductStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.SAVE_PRODUCT_SUCCESS:
      let productsSaved:Product[] = [...state.products];
      productsSaved.push((<ProductsActions> action).payload);
      return {...state,dataState:ProductStateEnum.LOADED,products:productsSaved,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.SAVE_PRODUCT_ERROR:
      return {...state,dataState:ProductStateEnum.ERROR,products:(<ProductsActions> action).payload,currentAction:<ProductsActions>action}

    /* EDIT PRODUCT REDUCER*/
    case ProductsActionsTypes.EDIT_PRODUCT:
      return {...state,dataState:ProductStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.EDIT_PRODUCT_SUCCESS:
      return {...state,dataState:ProductStateEnum.LOADED,currentProduct:(<ProductsActions>action).payload,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.EDIT_PRODUCT_ERROR:
      return {...state,dataState:ProductStateEnum.ERROR,products:(<ProductsActions> action).payload,currentAction:<ProductsActions>action}

    /* UPDATE PRODUCT REDUCER*/
    case ProductsActionsTypes.UPDATE_PRODUCT:
      return {...state,dataState:ProductStateEnum.LOADING,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.UPDATE_PRODUCT_SUCCESS:
      let updatedProduct:Product=(<ProductsActions>action).payload;
      let productsUpdated:Product[]=state.products.map(p=>(p.id==updatedProduct.id)?updatedProduct:p);
      return {...state,dataState:ProductStateEnum.UPDATED,products:productsUpdated,currentAction:<ProductsActions>action}
    case ProductsActionsTypes.UPDATE_PRODUCT_ERROR:
      return {...state,dataState:ProductStateEnum.ERROR,products:(<ProductsActions> action).payload,currentAction:<ProductsActions>action}

    default:return {...state}
  }
}
