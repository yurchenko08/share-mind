'use client';
import { useEffect, useState } from 'react';
import MindCard from './MindCard';

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

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText); // Update the searchText state with the input value
  };

  useEffect(() => {
    const fetchMinds = async () => {
      const response = await fetch('/api/mind');
      const data = await response.json();
      setPosts(data);
    };
    fetchMinds();
  }, []);

  // Filter posts based on the searchText
  const filteredPosts = posts.filter((post) => {
    const reg = new RegExp(searchText, 'i');
    return (
      reg.test(post.creator.username) ||
      reg.test(post.tag) ||
      reg.test(post.mind)
    );
  });

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
      <MindCardList data={filteredPosts} handleTagClick={() => {}} />
    </section>
  );
}

export default Feed;
