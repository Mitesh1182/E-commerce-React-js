import ProductDisplay from "../Componant/ProductDisplay/ProductDisplay";

export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';

export const feachProductRequest = () => ({
  type: FETCH_PRODUCT_REQUEST,
});

export const feachProductSuccess = (Product) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload : Product
});

export const feachProductFailure = (error) => ({
  type: FETCH_PRODUCT_FAILURE,
  payload : error
});


export const fetchProduct = ()=>{
  return(dispatch) =>{
        dispatch(feachProductRequest());
        fetch('https://fakestoreapi.com/products?limit=8')
        .then((response)=> response.json())
        .then((data)=>{
<ProductDisplay product={data}/>
            const Product = data.map((value)=>{
                return{
                    image : value.image,
                    title : value.title,
                    price : value.price,
                    description : value.description
                }
            })
            console.log(Product);
            dispatch(feachProductSuccess(Product));

        })
        .catch((error)=>{
            dispatch(feachProductFailure(error.massage));
        });
    }
}
