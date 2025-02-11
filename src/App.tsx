import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { TodoItem } from "./types";
import TodoList from "./components/TodoList";
import { defaultTodos } from "./data";
import ContactForm from "./components/ContactForm";
import "./App.css";

const App: React.FC = () => {
  // State for Todo List
  const [todos, setTodos] = useState<TodoItem[]>(defaultTodos);

  // Add a new todo
  const addTodo = (newTitle: string, id: number, notes: string) => {
    console.log(todos);
    console.log("id", id);
    if (id) {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
          todo.body = notes;
          return todo;
        } else {
          return todo;
        }
      });
      console.log(updatedTodos);
      setTodos(updatedTodos);
    } else {
      console.log("should be adding a new todo here");
      const newTodo = {
        id: todos.length + 1,
        title: "New Todo",
        completed: false,
        body: "Add your message here",
      };
      setTodos([...todos, newTodo]);
    }
  };

  // Toggle the completion status of a todo
  const toggleComplete = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>Todo App Example</h1>

      {/* Todo List Section */}
      <Button className="mt-2 mb-2" onClick={addTodo}>
        Add Todo
      </Button>
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        addTodo={addTodo}
      />

      {/* Contact Form Section */}
      <h1 className="mt-4">Contact Form</h1>
      <ContactForm />
    </div>
  );
};

export default App;
