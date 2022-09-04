import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [task, setTask] = useState([]);

  const getdata = () => {
    fetch("http://127.0.0.1:8000/task_list/")
      .then((res) => res.json())
      .then((data) => setTask(data));
  };

  useEffect(() => {
    getdata();
  }, []);

  const handel = (data) => {
    console.log(data);
  };

  return (
    <div>
      Home
      <div>
        {task.map((data) => (
          <div
            key={data.id}
            className="border border-primary py-3 d-flex justify-content-between px-5"
          >
            <div> {data.body}</div>
            
            <Link to={`/${data.id}`}>Readmore</Link>
          </div>

        ))}
      </div>
    </div>
  );
}

export default Home;
