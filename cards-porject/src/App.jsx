import React from "react";
import {Bookmark} from 'lucide-react'
export default function App () {
  return (
    <div className="Parent">

        <div className="card">
          <div className="top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WU0Emt19dyXiCPIuhVtxIFbqx13mkj54hA&s" alt="" />
            <button>Save <Bookmark /></button>
          </div>
          <div className="center">
            <h3>Amazon <span>5 Days ago</span></h3>
            <h2> Senior UI/UX designer</h2>
            <div>
              <h4>Part time</h4>
              <h4>Senior lever</h4>
            </div>
          </div>
          <div className="bottom">
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>

    </div>
  )
}