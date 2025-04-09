import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Beer } from "../types/BeerTypes";
import "../App.css";

function DetailBeerPage() {
  const { beerId } = useParams();
  console.log(beerId);

  const [beer, setBeer] = useState<Beer | null>(null);

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((res) => res.json())
      .then((data) => setBeer(data))
      .catch((err) => console.log(err));
  }, [beerId]);

  if (!beer) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <h3>{beer.tagline}</h3>
      <p>First brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>Description: {beer.description} </p>
      <p>Contributed by:{beer.contributed_by}</p>
    </>
  );
}

export default DetailBeerPage;
