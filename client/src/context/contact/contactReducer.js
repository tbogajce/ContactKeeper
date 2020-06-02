import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                // state is immutable, that's why we use spread operator
                // to copy what's already there
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== action.payload),
            };
        default:
            return state;
    }
};