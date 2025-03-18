import { useRef, useState, useEffect } from 'react';
import ItemsCard from './ItemsCard';
import LoadMoreContent from './LoadMoreContent';
import Loading from './Loading';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { debounce } from 'lodash';

const ItemsList = ({
  title,
  items = [],
  loading,
  error,
  onItemClick,
  loadMore,
}) => {
  const scrollRef = useRef(); 
  const [scrollPos, setScrollPos] = useState(0); 
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount =
        direction === 'left'
          ? -scrollRef.current.clientWidth * 0.8
          : scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleLoadMore = debounce(() => {
    if (scrollRef.current) {
      setScrollPos(scrollRef.current.scrollLeft);
    }
    loadMore(); 
  }, 300); 

  // Restore scroll position after re-render (once items change)
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPos;
    }
  }, [items, scrollPos]);

  return (
    <div className="relative">
      <h2 className="pb-1 text-2xl text-gray-100 pl-4">{title}</h2>
      <div className="flex items-center flex-col">
        <div className="overflow-x-auto no-scrollbar w-full" ref={scrollRef}>
          <ul className="flex gap-3 ml-5 py-4 w-max">
            {loading && items.length === 0 ? (
              <Loading />
            ) : error ? (
              <div className="flex justify-center w-screen h-screen py-9">
                <p className="text-gray-500 w-96 bg-gray-100 py-10 px-20 shadow">
                  {error}
                </p>
              </div>
            ) : (
              <>
                {items.map((item, index) => (
                  <ItemsCard
                    key={`${index}-${item.id}`}
                    id={item.id}
                    poster_path={item.poster_path}
                    title={item.title || item.name}
                    release_date={item.release_date || item.first_air_date}
                    vote_average={item.vote_average}
                    onClick={onItemClick}
                  />
                ))}
              </>
            )}
            {!loading && !error && items.length > 0 && (
              <LoadMoreContent onClick={handleLoadMore} />
            )}
          </ul>
        </div>

        {/* Scroll buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => scroll('left')}
            className="text-gray-200 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Scroll Left"
          >
            <FaChevronLeft size={15} />
          </button>
          <p className="text-yellow-500 text-sm  font-bold">Prev - Next</p>
          <button
            onClick={() => scroll('right')}
            className="text-gray-200 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Scroll Right"
          >
            <FaChevronRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
