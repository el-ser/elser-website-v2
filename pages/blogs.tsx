import type { NextPage } from "next";
import Head from "next/head";

import BlogLoader from "../components/loaders/blog-loader";
import BlogCard from "../components/blogs/blog-card";
import PageTitle from "../components/page-title";

import { useGetBlogsDataQuery, BlogDetails } from "../store/blogs/blogs.api";
import Footer from "../components/footer";

const Blogs: NextPage = () => {
  const blogsQueryResult = useGetBlogsDataQuery(null);
  const { data, isLoading, isError } = blogsQueryResult;

  return (
    <div>
      <Head>
        <title>Blogs / el-ser</title>
      </Head>
      <main className="flex flex-col pt-[10vh] justify-center items-center gap-y-8">
        <PageTitle>Blogs</PageTitle>
        {isLoading || isError ? (
          <BlogLoader />
        ) : (
          data.map((blog: BlogDetails) => {
            return <BlogCard key={blog._id} details={blog} />;
          })
        )}

        <hr className="border-[0.5px] rounded-full border-navy-blue-800/30 dark:border-smoke-600/30 w-[90%]" />
        <Footer />
      </main>
    </div>
  );
};

export default Blogs;
