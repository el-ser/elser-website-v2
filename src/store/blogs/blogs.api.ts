import { createApi } from "@reduxjs/toolkit/query/react";
import { request, gql, ClientError } from "graphql-request";

import { getUserArticles, getArticleDetailsQuery } from "./blogs.queries";

export type BlogItemDetails = {
  brief: string;
  coverImage: string;
  slug: string;
  title: string;
  dateAdded: string;
  _id: string;
};

export type BlogPageDetails = {
  title: string;
  dateUpdated: string;
  dateAdded: string;
  content: string;
  contentMarkdown: string;
  coverImage: string;
};

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
        body: getUserArticles("elser"),
      }),
      transformResponse: (response) => {
        console.log(response);
        return response.user.publication.posts;
      },
    }),
    getBlogDetails: builder.query<BlogPageDetails, {}>({
      query: ({ slug, hostname }: { slug: string; hostname: string }) => ({
        body: getArticleDetailsQuery(slug, hostname),
      }),
      transformResponse: (response) => {
        return response.post;
      },
    }),
  }),
});

export const { useGetBlogsDataQuery, useGetBlogDetailsQuery } = blogsApi;
