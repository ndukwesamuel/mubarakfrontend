import React, { useEffect, useState } from "react";

function Home() {
  const [getnote, setGetnote] = useState([]);

  const getData = () => {
    fetch("http://127.0.0.1:8000/notes/")
      .then((res) => res.json())
      .then((data) => setGetnote(data));

    //   .then((data) => console.log(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        {getnote.map((data) => {
          return (
            <div className="border border-primary py-3">
              <h1>{data.body}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
