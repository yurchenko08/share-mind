'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Form from '@components/Form';
const CreateMind = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ propmt: '', tag: '' });
  const createMind = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('/api/mind/new', {
        method: 'POST',
        body: JSON.stringify({
          mind: post.mind,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      handleSubmit={createMind}
    />
  );
};

export default CreateMind;