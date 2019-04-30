import React from "react";
import { Link } from "gatsby";
import "./lesson.scss";

const Lesson = ({ lesson }) => {
  const {
    title,
    description,
    exerciseLinks,
    timeToCompletion,
    videoLink,
    readingLinks
  } = lesson.frontmatter;

  return (
    <div>
      <Link className="Lesson-homeButton" to="/courses/Data-Types/">
        Data Types
      </Link>
      <h1>{title}</h1>
      {timeToCompletion && (
        <p>⌛ Average time to completion = <span className="Lesson-time">{timeToCompletion} ⌛</span></p>
      )}
      <p>{description}</p>
      <a href={exerciseLinks}>Exercises</a>
    </div>
  );
};

export default Lesson;
