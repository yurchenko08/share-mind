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
      const response = await fetch('/api/');
    } catch (error) {}
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
