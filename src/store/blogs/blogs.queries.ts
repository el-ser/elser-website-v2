import { gql } from "graphql-request";

export const getUserArticles = (username: string) => {
  return gql`
    query {
      user(username: "${username}") {
        publication {
          posts {
            _id
            title
            brief
            slug
            coverImage
            dateAdded
          }
        }
      }
    }
  `;
};

export const getArticleDetailsQuery = (slug: string, hostname: string) => {
  return gql`
    query {
      post(
        slug: "${slug}"
        hostname: "${hostname}"
      ) {
        title
        dateUpdated
        dateAdded
        content
        contentMarkdown
        coverImage
      }
    }
  `;
};
