<<<<<<< HEAD
// SortableListApp.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SortableListPage from './SortableListPage'; // Assurez-vous d'importer correctement le composant

import reportWebVitals from './reportWebVitals';

const SortableListApp = () => {
    return (
        <Provider store={store}>
            <React.StrictMode>
                <SortableListPage /> {/* Utilisez SortableListPage au lieu de SortableListApp */}
            </React.StrictMode>
        </Provider>
    );
};

reportWebVitals();

export default SortableListApp;
=======
// SortableListApp.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SortableListPage from './SortableListPage'; // Assurez-vous d'importer correctement le composant

import reportWebVitals from './reportWebVitals';

const SortableListApp = () => {
    return (
        <Provider store={store}>
            <React.StrictMode>
                <SortableListPage /> {/* Utilisez SortableListPage au lieu de SortableListApp */}
            </React.StrictMode>
        </Provider>
    );
};

reportWebVitals();

export default SortableListApp;
>>>>>>> 04d2407c9d5f244f6416e90f7e4a29d292cd0642
