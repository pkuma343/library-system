const reducer1 = (state=[], action) => {
    switch(action.type) {
        case 'LISTBOOKS':
            return action.payload;
        default:
            return state;
    }
}

export { reducer1 as default }