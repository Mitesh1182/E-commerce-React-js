import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE} from '../Redux/Action';

const initialState = {
    Product : [],
    isLoading: false,
    error : null
}

const ProductReducer = (state = initialState, action)=>{
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return{
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_PRODUCT_SUCCESS:
            return{
                ...state,
                isLoading: false,
                Product : action.payload
            };
        case FETCH_PRODUCT_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            };
    
        default:
            return state;
    }
}
export default ProductReducer;