import React, { useState } from 'react';

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [categoria, setCategoria] = useState("trabajo");
    const [fecha, setFecha] = useState(""); 
    const [todos, setTodos] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleCategoriaChange = (e) => {
        setCategoria(e.target.value);
    };

    const handleFechaChange = (e) => {
        setFecha(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            addTodo();
        }
    };

    const addTodo = () => {
        if (inputValue.trim() !== "") {
            setTodos([...todos, { tarea: inputValue, categoria, fecha }]);
            setInputValue("");
            setFecha(""); 
        }
    };

    const handleDelete = (index) => {
        setTodos(todos.filter((todo, currentIndex) => index !== currentIndex));
    };

    return (
        <div className="container">
            <h1 className='titulo'>MI LISTA DE TAREAS</h1>
            <div>
                <select value={categoria} onChange={handleCategoriaChange}>
                    <option value="trabajo">Trabajo</option>
                    <option value="familia">Familia</option>
                    <option value="casa">Casa</option>
                    <option value="ocio">Ocio</option>
                    <option value="finanzas">Finanzas</option>
                </select>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Escribe tu tarea..."
                />
                <input
                    type="date"
                    value={fecha}
                    onChange={handleFechaChange}
                />
                <button className='boton' onClick={addTodo}><i class="fa-solid fa-arrow-down"></i></button>
            </div>
            <div className='tareas-container'>
                <ul className='tareas'>
                    {todos.map((todo, index) => (
                        <li key={index} className="tarea-item">
                            <i class="fa-solid fa-trash" onClick={() => handleDelete(index)} ></i>
                            <span>{todo.tarea}</span>
                            <span className="categoria">{todo.categoria}</span>
                            <span className="fecha">{todo.fecha}</span> {}
                        </li>
                    ))}
                </ul>
            </div >
            <div>{todos.length} tareas</div>
        </div >
    );
};

export default Home;