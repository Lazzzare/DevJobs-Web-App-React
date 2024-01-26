type LoadMoreProps = {
  handleLoadMore: () => void;
};

const LoadMore = ({ handleLoadMore }: LoadMoreProps) => {
  return (
    <div className="pb-[104px]">
      <button
        onClick={handleLoadMore}
        className="py-2 px-4 bg-[#5964E0] text-white rounded-md flex mx-auto hover:opacity-80 hover:scale-125 duration-500"
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMore;
