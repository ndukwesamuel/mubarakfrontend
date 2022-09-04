import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Forms({ data, id }) {
  const navigate = useNavigate();
  const [body, setBody] = useState(data.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { body };
    console.log(data);

    fetch(`http://127.0.0.1:8000/task_list/${id}/update/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("new data added");
    });

    navigate(`/${id}`);
  };

  return (
    <div>
      <div>
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label for="floatingTextarea">Comments</label>
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Forms;
