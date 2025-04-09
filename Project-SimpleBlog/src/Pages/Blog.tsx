import { Link } from "react-router";
import { blogData } from "../Data/BlogData";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  return (
    <>
      {blogData.map((singleArticle) => (
        <BlogCard
          key={singleArticle.id}
          //   key immer wo das Map gemacht wird. wenn es kein map gibt, dann braucht es auch keinen key.s
          datenDieIchWeitergebe={singleArticle}
        />
        // <div>
        //   <img src={singleArticle.img_url} />
        //   <h3>{singleArticle.title}</h3>
        //   <Link to={`/blog/${singleArticle.id}`}>Read more</Link>
        // </div>
      ))}
    </>
  );
};

export default Blog;
