import React from "react";
import "./Myprofile.css";

export default function Myprofile() {
  return (
    <div className="profile">
      <div className="profile-frame">
        <div className="profile-pic">
          <img
            src="https://images.unsplash.com/photo-1562087926-662f8573327b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGElMjBwZXJzb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
            alt=""
          />
        </div>
        <div className="profile-data">
          <h1>Unknown indentity</h1>
          <div className="profile-info">
            <p>10 posts</p>
            <p>1 followers</p>
            <p>20 following</p>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "90%",
          opacity: "0.8",
          margin: "25px auto",
        }}
      />
      <div className="gallery">
        <img
          src="https://images.unsplash.com/photo-1542931287-023b922fa89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW4lMjBzdHJlZXQlMjB2aWV3fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1542931287-023b922fa89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW4lMjBzdHJlZXQlMjB2aWV3fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1542931287-023b922fa89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW4lMjBzdHJlZXQlMjB2aWV3fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1542931287-023b922fa89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW4lMjBzdHJlZXQlMjB2aWV3fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
          alt=""
        />
      </div>
    </div>
  );
}
