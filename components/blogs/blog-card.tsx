import Image from "next/image";
import Link from "next/link";

import { BlogDetails } from "../../store/blogs/blogs.api";

const BlogCard = ({ details }: { details: BlogDetails }) => {
  const { coverImage, title, brief, slug, dateAdded } = details;
  const date = new Date(dateAdded).toDateString();
  const dateArr = date.split(" ");
  const dateDetails = {
    day: dateArr[0],
    month: dateArr[1],
    date: dateArr[2],
    year: dateArr[3],
  };

  return (
    <>
      <hr className="border-[0.5px] rounded-full border-navy-blue-800/30 dark:border-smoke-600/30 w-[90%]" />
      <Link href={`https://elser.hashnode.dev/${slug}`}>
        <div className="grid grid-cols-1 mx-4 mt-4 gap-8 group/blog cursor-pointer items-center md:grid-cols-blog-card md:mx-12">
          <div className="relative h-60 w-full transition-theme group-hover/blog:scale-105">
            <Image
              src={coverImage}
              alt={`image-${slug}`}
              placeholder="blur"
              blurDataURL={coverImage}
              layout="fill"
              quality={100}
              objectFit="contain"
              className="rounded-2xl"
            />
          </div>
          <div className="text-color flex flex-col gap-2 transition-theme font-ubuntuMono">
            <h2 className="font-lexendDeca font-bold text-3xl">{`${title}`}</h2>
            <p className="font-semibold">{`(${dateDetails.month} ${dateDetails.date}, ${dateDetails.year})`}</p>
            <p className="text-lg text-justify">{brief}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
