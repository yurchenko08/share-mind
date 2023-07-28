'use client';
import { useEffect, useState } from 'react';
import MindCard from './MindCard';

const handleSearch = (e) => {};
const MindCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <MindCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};
function Feed() {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchMinds = async () => {
      const response = await fetch('/api/mind');
      const data = await response.json();
      setPosts(data);
    };
    fetchMinds();
  }, []);
  return (
    <section className='feed'>
      <form relative w-full flex-center>
        <input
          type='text'
          placeholder='Search for a tag or username'
          value={searchText}
          onChange={handleSearch}
          required
          className='search_input peer'
        />
      </form>
      <MindCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
}

export default Feed;
