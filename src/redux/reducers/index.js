const initialState = {
    selectedFraction: 'none',
    warriors: 10,
    drotts: 10,
    bonds: 10,
    thraels: 10,
    gold: 2000,
    move: 1,
    raidAvailabilityCounter: 1,
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
                drotts, 
                bonds, 
                thraels 
            } = action.payload;
            return {
                ...state,
                warriors: warriors, 
                drotts: drotts, 
                bonds: bonds, 
                thraels: thraels
            }
        case "CHANGE_GOLD_POINTS": 
            return {
                ...state,
                gold: action.payload
            }
        case "CHANGE_MOVE_POINTS":
            return {
                ...state,
                move: action.payload
            }
        case "CHANGE_RAID_AVAILABILITY_COUNTER": 
            return {
                ...state,
                raidAvailabilityCounter: action.payload
            }
        case "NEW_GAME": 
            return initialState;
            
        default: 
            return state; 
    }
}

export default reducer;