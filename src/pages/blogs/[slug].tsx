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

import { useGetBlogDetailsQuery } from "../../store/blogs/blogs.api";

const Blog: NextPage = () => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const detailsQueryResult = useGetBlogDetailsQuery({
    slug: slug,
    hostname: "elser",
  });
  const { data, isError, isLoading, isSuccess } = detailsQueryResult;
  return (
    <div className="flex justify-start items-start">
      <Head>
        <title>
          {isSuccess && !isLoading ? data?.title : "Blogs / el-ser"}
        </title>
      </Head>
      <article className="blog-content mt-[12vh] px-4 break-words w-full">
        {/* {!isLoading && <BlogLoader />} */}
        {isLoading ? (
          <BlogLoader />
        ) : (
          <>
            {isSuccess && (
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
                <div className="transition-theme text-color font-poppins opacity-70 self-center my-2">
                  {format(new Date(data?.dateAdded), "MMM dd, yyyy")}
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
            )}
          </>
        )}
      </article>
    </div>
  );
};

export default Blog;
