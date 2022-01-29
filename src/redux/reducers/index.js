const initialState = {
    selectedFraction: 'none',
    warriors: 10,
    drots: 10,
    bonds: 10,
    trells: 10,
    gold: 2000,
    consequence: {}
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_FRACTION':
            return {
                ...state,
                selectedFraction: action.payload
            };
        case 'CHANGE_CONSEQUENCE':
            return {
                ...state,
                consequence: action.payload
            }
        case 'CHANGE_FRACTIONS_POINTS':
            const { 
                warriors, 
                drots, 
                bonds, 
                trells 
            } = action.payload;
            return {
                ...state,
                warriors: warriors, 
                drots: drots, 
                bonds: bonds, 
                trells: trells
            }
        default: 
            return state; 
    }
}

export default reducer;