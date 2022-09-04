import React from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sub");
    const data = { title, body };
    console.log(data);

    fetch("http://127.0.0.1:8000/todo/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => console.log("new data added"));
    navigate("/");
  };

  return (
    <div>
      Create
      <form action="">
        <div>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          >
            enter your todo
          </textarea>
        </div>

        <button onClick={handleSubmit}> Submit</button>
      </form>
    </div>
  );
}

export default Create;
