import React from 'react';
import { Link } from 'gatsby';
import './lesson.scss'

const Lesson = ({ lesson }) => {
  const {
    title,
    description,
    exerciseLinks
  } = lesson.frontmatter;

  return (
    <div>
      <Link className="Lesson-homeButton" to="/courses/Data-Types/">Data Types</Link>
      
    </div>
  );
};

export default Lesson;
