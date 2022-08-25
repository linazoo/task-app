import React from "react";
import { Todo } from "./model";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import "./styles.css";
import TodoList from "./TodoList";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form className="todos_single">
      {todo.isDone ? (
        <s className="todos_single_text">{todo.todo}</s>
      ) : (
        <span className="todo_single_text">{todo.todo}</span>
      )}
      <div>
        <span className="icon">
          <FiEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <BsCheckLg />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
