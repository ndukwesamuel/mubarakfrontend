import React from "react";

function Create() {
  return (
    <div>
      <form action="" method="post" className="mx-5">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
        ></textarea>
        <button className="btn btn-primary mt-2" for="floatingTextarea2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
