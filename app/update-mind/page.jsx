'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Form from '@components/Form';
import Mind from '@models/mind';
const EditMind = () => {
  const searchParams = useSearchParams();
  const mindId = searchParams.get('id');
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ mind: '', tag: '' });
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
  //   const createMind = async (e) => {
  //     e.preventDefault();
  //     setSubmitting(true);
  //     try {
  //       const response = await fetch('/api/mind/new', {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           mind: post.mind,
  //           userId: session?.user.id,
  //           tag: post.tag,
  //         }),
  //       });
  //       console.log(response);
  //       if (response.ok) {
  //         router.push('/');
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setSubmitting(false);
  //     }
  //   };
  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={() => {}}
    />
  );
};

export default EditMind;
