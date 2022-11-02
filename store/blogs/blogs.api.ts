import { createApi } from "@reduxjs/toolkit/query/react";
import { request, gql, ClientError } from "graphql-request";

const GET_USER_ARTICLES = gql`
  query {
    user(username: "elser") {
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

export type BlogDetails = {
  brief: string;
  coverImage: string;
  slug: string;
  title: string;
  dateAdded: string;
  _id: string;
}

const graphqlBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
    async ({ body }: { body: ReturnType<typeof gql> }) => {
      try {
        const result = await request(baseUrl, body);
        return { data: result };
      } catch (error) {
        return {
          error: {
            status: error instanceof ClientError ? error.response.status : 500,
            data: error,
          },
        };
      }
    };

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: graphqlBaseQuery({ baseUrl: "https://api.hashnode.com/" }),
  endpoints: (builder) => ({
    getBlogsData: builder.query({
      query: () => ({
        body: GET_USER_ARTICLES,
      }),
      transformResponse: (baseQueryValue) => {
        return baseQueryValue.user.publication.posts
      }
    }),
  }),
});

export const { useGetBlogsDataQuery } = blogsApi;
