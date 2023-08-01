'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form';

const UpdateMind = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mindId = searchParams.get('id');

  const [post, setPost] = useState({ mind: '', tag: '' });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getMindDetails = async () => {
      const response = await fetch(`/api/mind/${mindId}`);
      const data = await response.json();

      setPost({
        mind: data.mind,
        tag: data.tag,
      });
    };

    if (mindId) getMindDetails();
  }, [mindId]);

  const updateMind = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!mindId) return alert('Missing PromptId!');

    try {
      const response = await fetch(`/api/mind/${mindId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          mind: post.mind,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateMind}
    />
  );
};

export default UpdateMind;
