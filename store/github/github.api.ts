import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const githubApi = createApi({
    reducerPath: "githubApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.github.com/", prepareHeaders(headers, _api) {
            headers.set("Accept", "application/vnd.github+json",)
            headers.set('authorization', process.env.NEXT_PUBLIC_GITHUB_TOKEN as string);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getPublicRepositories: builder.query({
            query: () => ({
                url: `user/repos`,
            }),
            transformResponse: (response: Array<any>) => {
                return response.map((repo) => ({ name: repo.name, description: repo.description, url: repo.html_url }))
            }
        })
    })
})

export const { useGetPublicRepositoriesQuery } = githubApi