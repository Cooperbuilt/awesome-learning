import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Tags from './Tags';
import './Course.scss';

const Course = ({ course }) => {
  const {
    tags,
    title,
    sessions
  } = course.frontmatter;

  const { html } = course;
  const { tagSlugs } = course.fields;

  return (
    <div className="Course">
      <Link className="Course-home-button" to="/">All Courses</Link>

      <div className="Course-content">
        <Content body={html} title={title} />
      </div>

      <div className="Course-footer">
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <Author />
      </div>

      <div className="Course-comments">
        <Comments courseSlug={course.fields.slug} courseTitle={course.frontmatter.title} />
      </div>
    </div>
  );
};

export default Course;
