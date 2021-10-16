import axios from 'axios';
import { GET_SINGLE_ITEM_FAIL, GET_SINGLE_ITEM_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, UPDATE_FAIL, UPDATE_SUCCESS } from '../Constant';
import { useHistory } from "react-router-dom";


const listItems = () => {
    return (dispatch) => {
      dispatch(setProductLoading());
  
      axios
        .get("http://localhost:3333/item/listall")
        .then((res) => {
          console.log("res", res.data);
          dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: res.data,
          });
        })
  
        .catch((err) => {
          console.log("err", err);
          dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: err,
          });
        });
    };
  };
  export const setProductLoading = () => {
    return {
      type: PRODUCT_LIST_REQUEST,
    };
  };


  const addProduct = (product) => {
    return (dispatch) => {
    //   dispatch(setProductLoading());
  
      axios
        .post("http://localhost:3333/item/add", product)
        .then((res) => {
          console.log("res", res);
          dispatch({
            type: PRODUCT_SAVE_SUCCESS,
            // payload: res.data,
          });
          window.location.href="/"
        })
  
        .catch((err) => {
          console.log("err", err);
          dispatch({
            type: PRODUCT_SAVE_FAIL,
            payload: err,
          });
        });
    };
  };
  

  const getSingleItem = (id) => {
    return (dispatch) => {
     
  
      axios
        .get(`http://localhost:3333/item/${id}`)
        .then((res) => {
          console.log("res", res.data);
          dispatch({
            type: GET_SINGLE_ITEM_SUCCESS,
            payload: res.data,
          });
        })
  
        .catch((err) => {
          console.log("err", err);
          dispatch({
            type: GET_SINGLE_ITEM_FAIL,
            payload: err,
          });
        });
    };
  };
 

  const itemUpdate = (product, id) => {
    return (dispatch) => {
     
  
      axios
        .put(`http://localhost:3333/item/update/`, product)
        .then((res) => {
          console.log("res", res.data);
          dispatch({
            type: UPDATE_SUCCESS,
            payload: res.data,
          });
          window.location.href="/"
        })
  
        .catch((err) => {
          console.log("err", err);
          dispatch({
            type: UPDATE_FAIL,
            payload: err,
          });
        });
    };
  };


  const deleteItemAction = (id) => {
    return (dispatch) => {
      console.log("id from action", id);
      axios.delete(`http://localhost:3333/item/delete/`,{
        data:{
          itemId:id
        }
      })
        .then((res) => {
          console.log("res", res.data);
          dispatch({
            type: PRODUCT_DELETE_SUCCESS,
            payload:res.data
            
          });
          console.log("dispatch",dispatch({type: PRODUCT_DELETE_SUCCESS,payload:id}))
          // window.location.href="/"
        }).catch((err) => {
          console.log("err", err);
          dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: err,
          });
        });
    };
  };


  // export const setProductLoading = () => {
  //   return {
  //     type: PRODUCT_LIST_REQUEST,
  //   };
  // };

// const listItems = () => async (dispatch) => {
//     try {
//       const data  = await axios.get("http://localhost:3333/item/listall");
//       dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
//     }
//   };

  // const saveProduct = (product) => async (dispatch) => {
  //   try {
  //     dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
  //     if (!product._id) {
  //       const { data } = await axios.post('http://localhost:3333/item/add', product);
  //       dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
  //     } else {
  //       const { data } = await axios.put(
  //         '/item/add' + product._id,
  //         product,
  //       );
  //       dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
  //     }
  //   } catch (error) {
  //     dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
  //   }
  // };


  export {
    listItems,
    addProduct,
    getSingleItem,
    itemUpdate,
    deleteItemAction
    
  };