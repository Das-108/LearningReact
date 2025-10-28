import React from "react";

export default function Card (props) {
    return (
        <div className="Parent">
            <div className="card">
                <img src="https://images.unsplash.com/photo-1761072195994-82158b4fc27d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=900" alt="image" />
                <h1>{props.user}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.tates voluptate.</p>
                <button>view profile</button>
            </div>
        </div>
    )
}