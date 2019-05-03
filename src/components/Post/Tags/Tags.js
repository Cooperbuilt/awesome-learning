import React from 'react';
import { Link } from 'gatsby';
import './Tags.scss';

const Tags = ({ tags, tagSlugs }) => (
  <div className="Tags">
    <ul className="Tags-list">
      {tagSlugs.map((slug, i) => (
        <li className="Tags-list-item" key={tags[i]}>
          <Link to={slug} className="Tags-list-item-link">
            {tags[i]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;
