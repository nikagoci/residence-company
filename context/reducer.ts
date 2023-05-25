const reducer = (state: any, action: any) => {
    switch(action.type){
        case "ADD_AREA_FROM_VALUE":
            return {
                ...state,
                areaFrom: action.payload
            }
        case "ADD_AREA_TO_VALUE":
            return {
                ...state,
                areaTo: action.payload
            }
        case "ADD_PRICE_FROM_VALUE":
            return {
                ...state,
                priceFrom: action.payload
            }
        case "ADD_PRICE_TO_VALUE":
            return {
                ...state,
                priceTo: action.payload
            }
    }
}

export default reducer;