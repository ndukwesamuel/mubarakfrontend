import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import Forms from "./Forms";

function Details() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [todo, setTodo] = useState(null);

  const [upd, setUpd] = useState(false);

  const getdata = () => {
    fetch(`http://127.0.0.1:8000/todo/${id}`)
      .then((res) => res.json())
      .then((data) => setTodo(data.singletodo));
  };

  useEffect(() => {
    getdata();

    return () => {};
  }, []);

  const getdelet = () => {
    fetch(`http://127.0.0.1:8000/todo/${id}`, {
      method: "DELETE",
    }).then(() => navigate("/"));
  };

  const updateButton = () => {
    setUpd(!upd);
  };

  return (
    <div>
      Details
      {todo && (
        <>
          <h1>{todo.title}</h1>
          <p>{todo.body}</p>
          <small>{todo.createdAt}</small>
          <div>
            <button onClick={updateButton}> Update</button>
            <button onClick={getdelet}>delete</button>
          </div>
        </>
      )}
      <div>{upd && <Forms data={todo} id={id} />}</div>
    </div>
  );
}

export default Details;
