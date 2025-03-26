import React from "react";

type FoodItemProbs = {
  imageFood: string;
  titleFood: string;
  descriptionFood: string;
  priceFood: string;
};

const FoodItem = (probs: FoodItemProbs) => {
  console.log(probs);

  return (
    <div>
      <img src={probs.imageFood} />
      <h2>{probs.titleFood}</h2>
      <p>{probs.descriptionFood}</p>
      <p>{probs.priceFood}</p>
    </div>
  );
};

export default FoodItem;
