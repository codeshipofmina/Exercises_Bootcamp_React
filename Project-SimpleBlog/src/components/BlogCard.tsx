import { Link } from "react-router";
type BlogCardProbs = {
  datenDieIchWeitergebe: {
    author: string;
    description: string;
    id: number;
    img_url: string;
    published_date: string;
    title: string;
  };
};
const BlogCard = (probs: BlogCardProbs) => {
  console.log(probs);

  //   const dieDatenDieAnkommen = probs.datenDieIchWeitergebe;
  //   console.log(dieDatenDieAnkommen);

  return (
    <div>
      <img src={probs.datenDieIchWeitergebe.img_url} />
      <h3>{probs.datenDieIchWeitergebe.title}</h3>
      <Link to={`/blog/${probs.datenDieIchWeitergebe.id}`}>Read more</Link>
    </div>
  );
};

export default BlogCard;
