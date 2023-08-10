<<<<<<< HEAD
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const DragAndDropList = ({ items }) => {
    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                        <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <div
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    margin: '8px 0',
                                    padding: '8px',
                                    backgroundColor: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <span style={{ marginRight: '8px' }}>{index + 1}</span>
                                {item.content}
                            </div>
                        </li>
                    )}
                </Draggable>
            ))}
        </ul>
    );
};

export default DragAndDropList;
=======
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const DragAndDropList = ({ items }) => {
    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                        <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <div
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    margin: '8px 0',
                                    padding: '8px',
                                    backgroundColor: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <span style={{ marginRight: '8px' }}>{index + 1}</span>
                                {item.content}
                            </div>
                        </li>
                    )}
                </Draggable>
            ))}
        </ul>
    );
};

export default DragAndDropList;
>>>>>>> 04d2407c9d5f244f6416e90f7e4a29d292cd0642
