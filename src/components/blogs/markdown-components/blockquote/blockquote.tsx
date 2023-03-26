export default function BlockQuote(props: React.PropsWithChildren) {
  console.log(props);
  return (
    <blockquote className="bg-gray-200 dark:bg-navy-blue-600 rounded-xl italic px-4 py-1 my-4">
      {props.children}
    </blockquote>
  );
}
