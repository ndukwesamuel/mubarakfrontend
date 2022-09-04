import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Forms from "../Component/Forms";

function Update() {
  const { id } = useParams();
  const [task, setTask] = useState("");
  const getdata = () => {
    fetch(`http://127.0.0.1:8000/task_list/${id}`)
      .then((res) => res.json())
      .then((data) => setTask(data));
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      Update
      {task && <Forms data={task} id={id} />}
    </div>
  );
}

export default Update;
