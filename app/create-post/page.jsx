"use client";

import { useState } from "react";
import Form from "@components/Form";

const CreatePost = () => {
  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    post:'',
    tag:'',
  })

  

  return (
    <>
      <Form 
       type='Create'
       post={post}
       setPost={setPost}
       submitting={submitting}
       setSubmitting={setSubmitting}
      />
    </>
  )
}

export default CreatePost