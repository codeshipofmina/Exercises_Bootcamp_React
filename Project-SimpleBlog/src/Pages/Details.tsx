import { useParams } from "react-router";
import { blogData } from "../Data/BlogData";

const Details = () => {
  const dasWasInDerURLSteht = useParams();
  console.log(dasWasInDerURLSteht);
  console.log("die Id direkt: ", dasWasInDerURLSteht.idPizza);

  // destructuring
  //   const { idPizza } = useParams();
  //   console.log("und hier destruktured:", idPizza);

  const articleDerAngezeightWerdenSoll = blogData.find(
    (singleArticle) => singleArticle.id === Number(dasWasInDerURLSteht.idPizza)
  );
  console.log(articleDerAngezeightWerdenSoll);

  if (!articleDerAngezeightWerdenSoll) {
    return "Sorry article not found";
  }

  return (
    <>
      <img src={articleDerAngezeightWerdenSoll.img_url} />
      <h2>{articleDerAngezeightWerdenSoll.title}</h2>
      <p>{articleDerAngezeightWerdenSoll.description}</p>
      <p>{articleDerAngezeightWerdenSoll.author}</p>
      <p>{articleDerAngezeightWerdenSoll.published_date}</p>
    </>
  );
};

export default Details;
