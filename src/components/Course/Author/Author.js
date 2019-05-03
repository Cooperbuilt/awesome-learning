// @flow
import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { getContactHref } from "../../../utils";
import "./Author.scss";

export const PureAuthor = ({ data }: Object) => {
  const { author } = data.site.siteMetadata;

  return (
    <div className="Author">
      <p className="Author-bio">
        {author.bio}
        <a
          className="Author-bio-twitter"
          href={getContactHref("twitter", author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on Twitter
        </a>
      </p>
    </div>
  );
};

export const Author = () => (
  <StaticQuery
    query={graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            author {
              name
              description
              contacts {
                twitter
              }
            }
          }
        }
      }
    `}
    render={data => <PureAuthor data={data} />}
  />
);

export default Author;
