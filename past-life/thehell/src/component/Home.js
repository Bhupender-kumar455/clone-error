import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="card">
        <div className="card-header">
          <div className="card-pic">
            <img
              src="https://images.unsplash.com/photo-1562087926-662f8573327b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGElMjBwZXJzb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
              alt=""
            />
          </div>
          <h5>Demice</h5>
        </div>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
            alt=""
          />
        </div>
        <div className="card-content">
          <span className="material-symbols-outlined">thumb_up</span>
          <p>57 Like</p>
          <p>pretty cool hah!</p>
        </div>
        <div className="add-comment">
          <span className="material-symbols-outlined">add_reaction</span>
          <input type="text" placeholder="Add comments" />
          <button className="comment">Post!</button>
        </div>
      </div>
    </div>
  );
}
