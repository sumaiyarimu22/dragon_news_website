import useNewQuery from "../../hooks/newsQuery";
import Title from "../common/Title";
import NewsCard from "./NewsCard";

const NewsList = () => {
  const { allNews, loading, error } = useNewQuery();

  return (
    <div>
      <Title title={"Dragon News Home"} />
      <div className='py-5'>
        {loading.state && <p className='text-center'>{loading.message}</p>}
        {error && <p className='text-rose-500 text-center'>{error}</p>}

        {/* news data show here */}
        <div className='flex flex-col gap-10'>
          {allNews.map((news) => (
            <div key={news.id}>
              <NewsCard news={news} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
