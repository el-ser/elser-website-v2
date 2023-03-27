import type { NextPage } from "next";
import Head from "next/head";

import BlogsLoader from "../components/loaders/blogs-loader";
import BlogCard from "../components/blogs/blog-card/blog-card";
import PageTitle from "../components/common/page-title/page-title";
import Footer from "../components/common/footer/footer";

import {
  useGetBlogsDataQuery,
  BlogItemDetails,
} from "../store/blogs/blogs.api";
import useMountTrail from "../hooks/use-mount-trail";

const Blogs: NextPage = () => {
  const blogsQueryResult = useGetBlogsDataQuery(null);
  const { data, isLoading, isError } = blogsQueryResult;
  const trailCount = data ? data.length + 1 : 1;

  const trails = useMountTrail(trailCount);

  return (
    <div>
      <Head>
        <title>Blogs / el-ser</title>
      </Head>
      <main className="flex flex-col pt-[10vh] justify-center items-center gap-y-8">
        <PageTitle spring={trails[0]}>Blogs</PageTitle>
        {isLoading || isError ? (
          <BlogsLoader />
        ) : (
          data!.map((blog: BlogItemDetails, idx: number) => {
            trails.shift();
            return (
              <BlogCard key={blog._id} details={blog} trail={trails[idx]} />
            );
          })
        )}

        <hr className="border-[0.5px] rounded-full border-navy-blue-800/30 dark:border-smoke-600/30 w-[90%]" />
        <Footer />
      </main>
    </div>
  );
};

export default Blogs;
