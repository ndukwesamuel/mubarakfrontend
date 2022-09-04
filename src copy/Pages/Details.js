import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  const navigate = useNavigate();

  const getdata = () => {
    fetch(`http://127.0.0.1:8000/task_list/${id}`)
      .then((res) => res.json())
      .then((data) => setTask(data));
  };

  const handelDelete = () => {
    fetch(`http://127.0.0.1:8000/task_list/${id}/delete/`, {
      method: "DELETE",
    }).then(() => navigate("/"));
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div>
        {task && (
          <div>
            <h1> {task.body}</h1>

            <button onClick={handelDelete} className="btn btn-danger me-5">
              Delete
            </button>
            <Link to={`/update/${task.id}`}>
              <button className="btn btn-success"> Update</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;
