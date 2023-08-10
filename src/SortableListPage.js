<<<<<<< HEAD
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Droppable } from 'react-beautiful-dnd';
import DragAndDropList from './DragAndDropList';

const SortableListPage = () => {
    const [items, setItems] = useState([]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const data = e.target.result;
                const workbook = XLSX.read(data, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                const itemsWithIds = jsonData.map((row, index) => ({
                    id: `item-${index}`,
                    content: row[0],
                }));

                setItems(itemsWithIds);
            };
            reader.readAsBinaryString(file);
        }
    };

    const exportToFile = () => {
        // Ajoutez ici la logique d'exportation vers un fichier
        // par exemple, utilisez XLSX pour générer le fichier Excel
    };

    return (
        <div>
            <h1>Trier par préférence depuis Excel</h1>
            <div>
                <input type="file" accept=".xlsx" onChange={handleFileChange} />
            </div>
            <div>
                <button onClick={exportToFile}>Exporter un fichier</button>
            </div>
            <Droppable droppableId="list">
                {(provided) => (
                    <ul
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <DragAndDropList items={items} setItems={setItems} />
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </div>
    );
};

export default SortableListPage;
=======
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Droppable } from 'react-beautiful-dnd';
import DragAndDropList from './DragAndDropList';

const SortableListPage = () => {
    const [items, setItems] = useState([]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const data = e.target.result;
                const workbook = XLSX.read(data, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                const itemsWithIds = jsonData.map((row, index) => ({
                    id: `item-${index}`,
                    content: row[0],
                }));

                setItems(itemsWithIds);
            };
            reader.readAsBinaryString(file);
        }
    };

    const exportToFile = () => {
        // Ajoutez ici la logique d'exportation vers un fichier
        // par exemple, utilisez XLSX pour générer le fichier Excel
    };

    return (
        <div>
            <h1>Trier par préférence depuis Excel</h1>
            <div>
                <input type="file" accept=".xlsx" onChange={handleFileChange} />
            </div>
            <div>
                <button onClick={exportToFile}>Exporter un fichier</button>
            </div>
            <Droppable droppableId="list">
                {(provided) => (
                    <ul
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <DragAndDropList items={items} setItems={setItems} />
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </div>
    );
};

export default SortableListPage;
>>>>>>> 04d2407c9d5f244f6416e90f7e4a29d292cd0642
