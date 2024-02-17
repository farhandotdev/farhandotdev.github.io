import React from 'react'
import './Project.css'

const Project = ({imgpic, title, desc, code, open}) => {
  return (
    <div className='project'>
        <div className='project-left'>
            <img src={imgpic} alt=""/>
        </div>
        <div className='project-right'>
            <span>{title}</span>
            <p>{desc}</p>
            <a href={open}>
            <button className='btn'>Open</button>
            </a>
            <a href={code}>
            <button className='btn'>Source Code</button>
            </a>
        </div>
    </div>
  )
}

export default Project