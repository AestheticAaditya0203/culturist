"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreatePost = () => {
  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    post:'',
    tag:'',
  })

  const createPost = async(e) =>{

  }

  return (
    <>
      <Form 
       type='create'
       post={post}
       setPost={setPost}
       submitting={submitting}
       setSubmitting={setSubmitting}
      />
    </>
  )
}

export default CreatePost