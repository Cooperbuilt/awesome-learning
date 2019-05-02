import React from "react";
import { Link } from "gatsby";
import "./lesson.scss";

const Lesson = ({ lesson }) => {
  const {
    title,
    description,
    exerciseLinks,
    timeToCompletion,
    videoLinks,
    readingLinks,
    preReadQuizLink,
    course
  } = lesson.frontmatter;
  return (
    <div className="Lesson">
      <Link className="Lesson-homeButton" to={`/courses/${course}/`}>
        Back to {course}
      </Link>
      <h2 className="Lesson-title">{title}</h2>
      <div className="Lesson-body">
        {timeToCompletion && (
          <p>
            ⌛ Average time to completion ={" "}
            <span className="Lesson-time">{timeToCompletion} ⌛</span>
          </p>
        )}
        <p>{description}</p>
        <h3>Pre-Session Learning Materials (required)</h3>
        <p>
          Check out this content before your session begins to get an idea of
          what you will be working on.
        </p>
        {videoLinks && (
          videoLinks.map(link => (
            <iframe
              key={link}
              width="560"
              height="315"
              src={link}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )))}

        <h3>Pre-read Materials (bonus)</h3>
        <p>
          We've curated these resources to give you greater depth on these
          subjects. Don't feel like you have to read them all.
          <br />
          Taking the time to go through all of these resources will definitely
          put you on the road to expert-level knowledge in this subject matter.
        </p>
        {readingLinks && (
          <ul>
            {readingLinks.map(readingLink => (
              <li key={readingLink.title}>
                <a
                  href={readingLink.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {readingLink.title}
                </a>
                <p>- {readingLink.description}</p>
              </li>
            ))}
          </ul>
        )}
        <h3>Pre-read Quiz</h3>
        <p>
          Test your knowledge from the pre-read material{" "}
          <a href={preReadQuizLink} rel="noopener noreferrer" target="_blank">
          here
          </a>
          !
        </p>
        <h3>Exercises</h3>
        <p>
          Session exercises with answer keys provided{" "}
          <a href={exerciseLinks} rel="noopener noreferrer" target="_blank">
            here
          </a>
        </p>
        <h3>Session Feedback</h3>
        <p>
          We need as much feedback as possible to make this platform more effective for you and others like you. Please take a moment to fill out this session survey {" "}
          <a href={exerciseLinks} rel="noopener noreferrer" target="_blank">
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Lesson;
