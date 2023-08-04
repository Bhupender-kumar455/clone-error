import React, { useState } from "react";
import "./createPost.css";

export default function Createpost() {
  const [body, setBody] = useState("");
  const [image, setImage] = useState();
  const [url, setUrl] = useState();

  const postDetails = () => {
    console.log(body, image);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "zombieland");
    data.append("cloud_name", "zombie68");
    fetch("https://api.cloudinary.com/v1_1/zombie68/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setUrl(data.url))
      .catch((err) => console.log(err));

    // saving the image and caption of post in mongoDB
    fetch("http://localhost:5000/createPost", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization ": "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        body,
        pic: url,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

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
        <button
          id="post-btn"
          onClick={() => {
            postDetails();
          }}
        >
          Share
        </button>
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
            setImage(e.target.files[0]);
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
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          type="text"
          placeholder="Write what you have in your mind!"
        ></textarea>
      </div>
    </div>
  );
}
