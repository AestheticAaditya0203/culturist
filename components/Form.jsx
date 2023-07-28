const Form = ({ type, post, setPost, submitting, setSubmitting }) => {
  return (
    <>
      <section className="w-full max-w-full flex-start flex-col">
        <h1 className="head_text text-left">
          <span className="blue_gradient">{type} Post</span>
        </h1>
      </section>
      <p className="desc text-left max-w-md">
        {type} and share your experience in form of blogs & let everyone learn
        about varied culture.
      </p>
      <form className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your Blogs
          </span>
          <textarea
              value={post.prompt}
              onChange={}
          />
        </label>
      </form>
    </>
  );
};

export default Form;
