const initialState = {
    cartVal:0,
    cartItem:[]
}
export const cartReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'Add':
            return (state={
                cartVal:state.cartVal+1,
                cartItem:action.payload
            })
        case 'REMOVE':
            return state-1
        default:
            return (state={
                cartVal:0,
                cartItem:{}
            })
    }
}