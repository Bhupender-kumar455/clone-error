import React from "react";
import "./createPost.css";

export default function Createpost() {
  const loadFile = (e) => {
    let output = document.getElementById("output");
    output.src = URL.createObjectURL(e.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src);
    };
  };

  return (
    <div className="createPost">
      <div className="post-header">
        <h4>Make a Post!</h4>
        <button id="post-btn">Share</button>
      </div>
      <div className="main-div">
        <img
          id="output"
          src="https://icon-library.com/images/img-icon/img-icon-1.jpg"
          alt="imagePreview"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            loadFile(e);
          }}
        />
      </div>
      <div className="details">
        <div className="card-header">
          <div className="card-pic">
            <img
              src="https://images.unsplash.com/photo-1562087926-662f8573327b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGElMjBwZXJzb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
              alt=""
            />
          </div>
          <h4 style={{ margin: "3px auto" }}>Unknown indentity</h4>
        </div>
        <textarea
          type="text"
          placeholder="Write what you have in your mind!"
        ></textarea>
      </div>
    </div>
  );
}
