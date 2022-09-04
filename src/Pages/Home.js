import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [todo, setTodo] = useState(null);

  const getdata = () => {
    fetch("http://127.0.0.1:8000/todo/")
      .then((res) => res.json())
      .then((data) => setTodo(data.allTodo));
  };

  useEffect(() => {
    getdata();

    return () => {};
  }, []);
  return (
    <div>
      <div>
        {todo && (
          <>
            {todo.map((data) => (
              <div key={data._id}>
                <h1>{data.title}</h1>
                <p>{data.body}</p>
                <Link to={`/${data._id}`}>Readmore</Link>

                <hr />
              </div>
            ))}
          </>
        )}
      </div>
      {/* <div>{!todo && <h1> Not working </h1>}</div> */}
    </div>
  );
}

export default Home;
