import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import DragAndDropList from './DragAndDropList';
import * as XLSX from 'xlsx';
import './style.css';


const App = () => {
    const [items, setItems] = useState([]);

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const reorderedItems = Array.from(items);
        const [draggedItem] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, draggedItem);

        setItems(reorderedItems);
    };

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

                const itemsFromExcel = jsonData.map((row, index) => ({
                    id: `item-${index}`,
                    content: row[0],
                }));

                setItems(itemsFromExcel);
            };
            reader.readAsBinaryString(file);
        }
    };

    const exportToFile = () => {
        const data = items.map(item => [item.content]);
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

        const blob = new Blob([wbout], { type: 'application/octet-stream' });

        const saveAs = require('file-saver');
        saveAs.saveAs(blob, 'exported_list.xlsx');
    };


    return (
        <div style={{ margin: '20px' }}>
            <h1>TRILOEX</h1>
            <input type="file" accept=".xlsx" onChange={handleFileChange} />
            <button onClick={exportToFile}>Exporter vers Excel</button>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <DragAndDropList items={items} />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default App;
