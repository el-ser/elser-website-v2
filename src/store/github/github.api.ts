import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
    prepareHeaders(headers, _api) {
      headers.set("Accept", "application/vnd.github+json");
      headers.set(
        "authorization",
        "Bearer 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"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPublicRepositories: builder.query({
      query: () => ({
        url: `user/repos`,
      }),
      transformResponse: (response: Array<any>) => {
        return response.map((repo) => ({
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          id: repo.node_id,
        }));
      },
    }),
    // getMarkdownContent: builder.query({
    // query: ({cuid}: {cuid: string}) => ()
    // }),
  }),
});

export const { useGetPublicRepositoriesQuery } = githubApi;
