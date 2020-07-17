import { ADD_ITEM, FILTER_TODO } from 'src/helpers/constants';

export const addItem = (text, label) => {
    return {
        type: ADD_ITEM,
        text,
        label,
    };
};

export const filterToDo = () => {
    return {
        type: FILTER_TODO,
    };
};
