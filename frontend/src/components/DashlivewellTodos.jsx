import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAegleCoveStore from '../store/AeglcoveStore';
import { MdDelete } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import styles from '../styles/todo.module.css';

const DashlivewellTodos = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const pendingtodo = useAegleCoveStore((state) => state.user.userpendingtodos);
    const completetodo = useAegleCoveStore((state) => state.user.usercompletetodos);
    const setpendingtodo = useAegleCoveStore((state) => state.setPendingTodos);
    const setcompletettodo = useAegleCoveStore((state) => state.setCompleteTodos);
    const deletependingtodo = useAegleCoveStore((state) => state.setDeletePendingTodo);
    const deletecompletetodo = useAegleCoveStore((state) => state.setDeleteCompleteTodo);
    const [errorMessage, setErrorMessage] = useState("");

    // Handle adding a new todo
    const HandleAddTodo = async (data) => {
        try {
            setpendingtodo(data.todo); // Add the new todo
            console.log("New Todo:", data.todo);

            const response = await fetch('http://localhost:8080/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: data.todo,
            });

            if (!response.ok) {
                throw new Error('Unable to add todo. Please try again.');
            }

            reset(); // Reset the form
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    // Handle toggling todo completion
    const handleCheck = (e) => {
        const todoIndex = parseInt(e.target.value);
        if (e.target.checked) {
            setcompletettodo(pendingtodo[todoIndex]); // Move to completed
            deletependingtodo(todoIndex); // Delete from pending    
        }
    };

    const handleedit = (e) => {

    }

    return (
        <div className={styles.todos}>
            <form onSubmit={handleSubmit(HandleAddTodo)} className={styles.addtodo}>
                <div className={styles.wrapper}>
                    <input
                        placeholder="Add your todo"
                        {...register('todo', {
                            required: { value: true, message: 'Todo is required' },
                        })}
                        type="text"
                    />
                    {errors.todo && <p className={styles.error}>{errors.todo.message}</p>}
                </div>
                <button type="submit">Add</button>
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            </form>
            <div className={styles.todolistwapper}>
                <h2>Pending Todos</h2>
                <div className={styles.pendingtodos}>

                    {pendingtodo && pendingtodo.length > 0 ? (
                        pendingtodo.map((todo, index) => (
                            <div className={styles.checkbox} key={index}>
                                <input
                                    type="checkbox"
                                    onChange={handleCheck}
                                    value={index}
                                    id={`pending-${index}`}
                                />
                                <label htmlFor={`pending-${index}`}>{todo}</label>
                                <button onClick={() => deletependingtodo(index)}><span className={styles.buttonIcon}><MdDelete /><p>Delete</p></span></button>
                                <button>
                                    <span className={styles.buttonIcon}> <RiEditBoxFill /><p>Edit</p></span>
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No pending todos</p>
                    )}
                </div>

                <h2>Complete Todos</h2>
                <div className={styles.completetodos}>

                    {completetodo && completetodo.length > 0 ? (
                        completetodo.map((todo, index) => (
                            <div className={styles.checkbox} key={index}>
                                <input
                                    type="checkbox"
                                    checked
                                    id={`complete-${index}`}
                                />
                                <label htmlFor={`complete-${index}`}>{todo}</label>
                                <button onClick={() => deletecompletetodo(index)}><span className={styles.buttonIcon}><MdDelete /><p>Delete</p></span></button>
                            </div>
                        ))
                    ) : (
                        <p>No completed todos</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashlivewellTodos;
