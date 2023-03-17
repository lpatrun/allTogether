import React, { useState } from "react";

function BlogPage() {
  const [value, setValue] = useState("");

  const [todos, setTodos] = useState([]);

  const pushTodo = () => {
    setTodos((prev) => [...prev, value]);
    setValue("");
  };

  return (
    <div>
      <p>Todo Lista</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => pushTodo()}>Dodaj todo</button>

      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
}

export default BlogPage;
