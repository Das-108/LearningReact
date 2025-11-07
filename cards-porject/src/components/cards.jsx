import React from "react";
import {Bookmark} from 'lucide-react'

export default function Card (props) {
  return (
    <div className="Parent">
      
        <div className="card">
          <div className="top">
            <img src={props.brandLogo} alt="" />
            <button>Save <Bookmark /></button>
          </div>
          <div className="center">
            <h3>{props.company} <span>{props.datePosted}</span></h3>
            <h2> {props.jobTitle} </h2>
            <div>
              <h4>{props.jobType}</h4>
              <h4>{props.jobLevel}</h4>
            </div>
          </div>
          <div className="bottom">
            <div>
              <h3>{props.salary}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>

    </div>
  )
}