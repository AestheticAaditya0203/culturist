import Feed from "@components/feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center"> Rich Culture</span>
        </h1>
        <p className="desc text-center">
        Embark on a Cultural Journey through India and Share it with us.
        </p>

        <Feed />
    </section>
  )
}

export default Home