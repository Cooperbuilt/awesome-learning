import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Tags from './Tags';
import './Post.scss';

const Post = ({ post }) => {
  const {
    tags,
    title,
    sessions
  } = post.frontmatter;

  const { html } = post;
  const { tagSlugs } = post.fields;

  return (
    <div className="Post">
      <Link className="Post-home-button" to="/">All Courses</Link>

      <div className="Post-content">
        <Content body={html} title={title} />
      </div>

      <div className="Post-footer">
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <Author />
      </div>

      <div className="Post-comments">
        <Comments postSlug={post.fields.slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
