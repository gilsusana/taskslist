import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';



function ToDoList() {
  const [toDos, setToDos] = useState([]);

  const addToDo = toDo => {
    if (!toDo.text || /^\s*$/.test(toDo.text)) {
      return;
    }

    const newToDos = [toDo, ...toDos];

    setToDos(newToDos);
    console.log(...toDos);
  };

  const updateToDo = (toDoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setToDos(prev => prev.map(item => (item.id === toDoId ? newValue : item)));
  };

  const removeToDo = id => {
    const removedArr = [...toDos].filter(toDo => toDo.id !== id);

    setToDos(removedArr);
  };

  const completeToDo = id => {
    let updatedToDos = toDos.map(toDo => {
      if (toDo.id === id) {
        toDo.isComplete = !toDo.isComplete;
      }
      return toDo;
    });
    setToDos(updatedToDos);
  };

  return (
    <>
      <h1>Planes para hoy?</h1>
      <ToDoForm onSubmit={addToDo} />
      <ToDo
        toDos={toDos}
        completeToDo={completeToDo}
        removeToDo={removeToDo}
        updateToDo={updateToDo}
      />
    </>
  );
}

export default ToDoList;