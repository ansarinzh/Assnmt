import { GET_SINGLE_ITEM_FAIL, GET_SINGLE_ITEM_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, UPDATE_FAIL, UPDATE_SUCCESS } from "../Constant";

const Initial_State = {
    products: [],
    product: {},
    errors: {},
  }


function itemListReducer(state = Initial_State, action) {
    switch (action.type) {
      case PRODUCT_LIST_SUCCESS:
        return { ...state, loading: false, products: action.payload, errors: {}, };
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  function productAddReducer(state = Initial_State, action) {
    switch (action.type) {
      case PRODUCT_SAVE_SUCCESS:
        // const products= state.product
        return { ...state, loading: false, success: true };
      case PRODUCT_SAVE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  function singleItemReducer(state = Initial_State, action) {
    switch (action.type) {
      case GET_SINGLE_ITEM_SUCCESS:
        // const products= state.product
        return { ...state, loading: false, product:action.payload };
      case GET_SINGLE_ITEM_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }

  function updateItemReducer(state = Initial_State, action) {
    switch (action.type) {
      case UPDATE_SUCCESS:
        // const products= state.product
        console.log("id from reducer");
        return { ...state, loading: false, success: true  };
        
      case UPDATE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function deleteItemReducer(state = Initial_State, action) {
    switch (action.type) {
      case PRODUCT_DELETE_SUCCESS:
        // const products= state.product
        return { ...state, loading: false, product: action.payload };
      case PRODUCT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }


  export {itemListReducer, productAddReducer, singleItemReducer, updateItemReducer, deleteItemReducer}