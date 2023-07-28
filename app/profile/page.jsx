'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Profile from '@components/Profile';
const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}`);
      const data = await response.json();
      setPosts(data);
    };
    session?.user.id && fetchPosts();
  }, []);
  const handleEdit = () => {};
  const handleDelete = async () => {};
  return (
    <Profile
      name='My profile'
      desc='welcome to my profile'
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
