const addItemHandler = (state, payload) => {
    const itemData = {id: Math.random(), value: payload, done: false};

    const updatedItems = state.items.concat(itemData);

    return { ...state, items: updatedItems };
};

const removeItemHandler = (state, payload) => {
    const updatedItems = state.items.filter(item => (item.id !== payload.id));

    return { ...state, items: updatedItems };
};

const editItemHandler = (state, payload) => {
    const updatedItems = state.items.map((item) => {
        if(item.id === payload.id) {
            return {...item, value : payload.data};
        }
        else { return item;}
    });

    return { ...state, items: updatedItems };
};
const toogleItemHandler = (state, payload) => {
    const updatedItems = state.items.map((item) => {
        if(item.id === payload.id) {
            return {...item, done : !item.done }
            }
        else { return item;}
    });

    return { ...state, items: updatedItems };
}

export default (state = [], action) => {
    const { type, payload } = action;

    switch(type) {
        case 'ADD_ITEM':
            return addItemHandler(state, payload);

        case 'REMOVE_ITEM':
            return removeItemHandler(state, payload);


        case 'EDIT_ITEM':
            return editItemHandler(state, payload);

        case 'TOGGLE_CHECKED':
            return toogleItemHandler(state, payload);

        default:
            return state;
    }
}