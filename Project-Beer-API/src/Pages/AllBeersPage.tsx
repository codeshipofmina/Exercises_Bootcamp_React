import { useEffect, useState } from "react";
import { Beer } from "../types/BeerTypes";
import { Link } from "react-router";
import "../App.css";

function AllBeersPage() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      //   .then((data) => {
      //     return new Promise<{ results: Beer[] }>((resolve) => {
      //       setTimeout(() => resolve(data), 1500); // Delay of 1500 ms
      //     });
      //   })
      .then((data) => {
        setBeers(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {!isLoading &&
        beers.map((singleBeer) => (
          <Link to={`/beers/${singleBeer._id}`}>
            <h2>{singleBeer.name}</h2>
            <img src={singleBeer.image_url} alt={singleBeer.name} />
          </Link>
        ))}
    </>
  );
}

export default AllBeersPage;
