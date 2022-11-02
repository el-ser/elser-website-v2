const PageTitle = ({ children }: { children: string }) => {
  return (
    <h1 className="text-color font-poppins text-5xl font-semibold pt-[5%]">
      {children}
    </h1>
  );
};

export default PageTitle;
