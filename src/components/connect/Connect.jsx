import React from "react";
import "./Connect.css";

const Connect = () => {
  return (
    <>
      <hr />
      <div className="connect">
        <div className="connect-left">
          <span className="head1">Let's work together</span>
          <br />
          <br />
          <p>
            Hello there! I'm Farhan Alam, and I'm thrilled about the idea of
            collaborating with passionate individuals or teams on exciting
            projects. I bring a unique blend of skills, creativity, and a
            commitment to delivering exceptional results.
          </p>
          <br />
          <hr className="hr" />
          <ul>
            <a href="https://twitter.com/farhandotdev" target="_block">
              <li className="x">X</li>
            </a>
            <a href="https://www.linkedin.com/in/farhandotdev" target="_block">
              <li className="l">L</li>
            </a>
            <a href="https://github.com/farhandotdev" target="_block">
              <li className="g">G</li>
            </a>
            <a href="https://www.instagram.com/farhandotdev/ " target="_block">
              <li className="i">I</li>
            </a>
            <a href="https://unsplash.com/@farhandotdev" target="_block">
              <li className="u">U</li>
            </a>
            <li className="t">T</li>
          </ul>
        </div>
        <div className="connect-right">
          <form>
            <input className="input" type="text" placeholder="Name" />
            <input className="input" type="email" placeholder="Email" />
            <br />
            <br />
            <button className="button">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Connect;
