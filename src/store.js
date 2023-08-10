<<<<<<< HEAD
import { createStore } from 'redux';

// Définissez vos actions et réducteurs ici
const initialState = {
    items: [],
    // ...autres états
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        // ...d'autres cas
        default:
            return state;
    }
};

const store = createStore(rootReducer);

export default store;
=======
import { createStore } from 'redux';

// Définissez vos actions et réducteurs ici
const initialState = {
    items: [],
    // ...autres états
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        // ...d'autres cas
        default:
            return state;
    }
};

const store = createStore(rootReducer);

export default store;
>>>>>>> 04d2407c9d5f244f6416e90f7e4a29d292cd0642
