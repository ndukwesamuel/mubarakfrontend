import React from "react";
import { useState } from "react";

function Forms({ data, id }) {
  const [title, setTitle] = useState(data.title);
  const [body, setBody] = useState(data.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sub");
    const data = { title, body };
    console.log(data);

    fetch(`http://127.0.0.1:8000/todo/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => window.location.reload());
  };

  return (
    <div>
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
          ></textarea>

          <button onClick={handleSubmit}> Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
