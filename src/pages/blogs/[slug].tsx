import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { format } from "date-fns";

import "highlight.js/styles/monokai-sublime.css";

import P from "../../components/blogs/markdown-components/p/p";
import H1 from "../../components/blogs/markdown-components/h1/h1";
import H2 from "../../components/blogs/markdown-components/h2/h2";
import Li from "../../components/blogs/markdown-components/li/li";
import Ul from "../../components/blogs/markdown-components/ul/ul";
import Ol from "../../components/blogs/markdown-components/ol/ol";
import BlockQuote from "../../components/blogs/markdown-components/blockquote/blockquote";
import BlogLoader from "../../components/loaders/blog-loader";
import ApiError from "../../components/common/api-error/api-error";
import PillButton from "../../components/common/pill-button/pill-button";

import { useGetBlogDetailsQuery } from "../../store/blogs/blogs.api";

const getReadingTime = (markdown: string) => {
  const wpm = 225;
  const words = markdown?.split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
};

const Blog: NextPage = () => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const detailsQueryResult = useGetBlogDetailsQuery({
    slug: slug,
    hostname: process.env.NEXT_PUBLIC_HASHNODE_USERNAME,
  });

  const { data, isLoading, isSuccess } = detailsQueryResult;

  return (
    <div className="flex justify-start items-start">
      <Head>
        <title>
          {isSuccess && !isLoading ? data?.title : "Blogs / el-ser"}
        </title>
      </Head>
      <article
        id="blog-details"
        className="blog-content mt-[12vh] px-4 break-words w-full">
        {isLoading ? (
          <BlogLoader />
        ) : (
          <>
            {isSuccess ? (
              <div className="flex flex-col md:px-32">
                <div
                  id="image-container"
                  className="relative h-60 md:h-96 w-full">
                  <Image
                    src={data!.coverImage}
                    alt={`image-${slug}`}
                    placeholder="blur"
                    blurDataURL={data?.coverImage}
                    layout="fill"
                    quality={80}
                    objectFit="contain"
                  />
                </div>
                <h1 className="transition-theme text-color font-lexendDeca font-bold text-4xl self-center text-center my-4">
                  {data?.title}
                </h1>
                <div className="flex justify-center items-center text-color font-poppins self-center gap-4">
                  <span className="my-2 border-2 rounded-lg px-2 py-1 border-navy-blue-700 dark:border-smoke-600">
                    {format(new Date(data?.dateAdded), "MMM dd, yyyy")}
                  </span>
                  <span className="my-2 border-2 rounded-lg px-2 py-1 border-navy-blue-700 dark:border-smoke-600">
                    {getReadingTime(data.contentMarkdown)} mins read
                  </span>
                </div>
                <ReactMarkdown
                  children={data.contentMarkdown}
                  className="mt-4"
                  components={{
                    p: P,
                    h1: H1,
                    h2: H2,
                    li: Li,
                    ul: Ul,
                    ol: Ol,
                    blockquote: BlockQuote,
                  }}
                  rehypePlugins={[
                    rehypeRaw,
                    [rehypeHighlight, { detect: true, ignoreMissing: true }],
                  ]}
                />
              </div>
            ) : (
              <ApiError />
            )}
          </>
        )}
      </article>
    </div>
  );
};

export default Blog;
