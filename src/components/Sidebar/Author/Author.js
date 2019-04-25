import React from "react";
import { Link } from "gatsby";
import "./Author.scss";

const Author = ({ author, isIndex }) => (
  <div className="author">
    <Link to="/">
      <svg
        class="author-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 44.9 44.9"
      >
        <path
          d="M14.9 44.9c-.2 0-.3 0-.5-.1L4.2 42.1c-.7-.2-1.3-.7-1.4-1.4L.1 30.5c-.2-.7 0-1.4.5-1.8l6.2-6.2-6.2-6.2c-.5-.5-.7-1.2-.5-1.8L2.8 4.2c.1-.7.7-1.2 1.4-1.4L14.4.1c.7-.2 1.4 0 1.8.5l6.2 6.2L28.6.6c.5-.5 1.2-.7 1.8-.5l10.2 2.7c.7.2 1.2.7 1.4 1.4l2.7 10.2c.2.7 0 1.4-.5 1.8L38 22.4l6.1 6.1c.6.6.8 1.4.6 2l-2.6 10c-.2.8-.8 1.4-1.6 1.6l-10 2.6c-.8.2-1.6 0-2-.6L22.4 38l-6.2 6.2c-.4.5-.9.7-1.3.7zM1.8 30l2.7 10.2.1.1L14.8 43h.2l6.2-6.2L8 23.7 1.8 30c0-.1 0 0 0 0zm21.9 6.8l6.1 6.1c.1.1.2.1.3.1l10-2.6c.1 0 .2-.1.2-.2l2.6-10c0-.1 0-.2-.1-.3l-6.1-6.1-13 13zM9.3 22.4l13 13 13-13-12.9-13-13.1 13zM23.7 8l13 13 6.2-6.2v-.1L40.2 4.5l-.1-.1L30 1.8h-.1L23.7 8zM8 21.2l13-13-6.2-6.3h-.1L4.5 4.5l-.1.1-2.6 10.3v.1L8 21.2z"
          class="st6"
        />
      </svg>
    </Link>

    {isIndex ? (
      <h1 className="author-title">
        <Link className="author-title--link" to="/">
          {author.name}
        </Link>
      </h1>
    ) : (
      <h2 className="author-title">
        <Link className="author-title--link" to="/">
          {author.name}
        </Link>
      </h2>
    )}
    <p className="author-subtitle">{author.description}</p>
  </div>
);

export default Author;
