
export const addItem = (data) => ({
    type: 'ADD_ITEM',
    payload: data,
});
export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: { id },
});

export const editItem = (data, id) => ({
    type: 'EDIT_ITEM',
    payload: { id, data },
});
