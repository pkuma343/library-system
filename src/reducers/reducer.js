const reducer = (state=[], action) => {
    switch(action.type) {
        case 'LIBRARIES':
            return action.payload;                    
        default:
            return state;
    }
}

export { reducer as default }