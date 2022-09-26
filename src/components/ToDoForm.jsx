import React, { useState, useEffect, useRef } from 'react';

function ToDoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form className='toDo-form' onSubmit={handleSubmit} >
      {props.edit ? (
        <>
          <input type='text' placeholder='Actualizar' value={input}  name='text' className='toDo-input edit'
          onChange={handleChange} ref={inputRef} />
          <button className='toDo-button edit'>
            Actualizar
          </button>
        </>
      ) : (
        <>
          <input placeholder='Añadir tarea' value={input} onChange={handleChange} name='text' className='toDo-input'
            ref={inputRef}/>
          <button onClick={handleSubmit} className='toDo-button'>
            Añadir
          </button>
        </>
      )}
    </form>
  );
}

export default ToDoForm;