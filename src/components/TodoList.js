import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
    );
    };
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    
    const completeTodo = id => {
        let uptadetTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(uptadetTodos);
    }
    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm  onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList
