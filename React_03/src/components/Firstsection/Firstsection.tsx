// - Du erstellst eine Landingpage in React.
// Erzeuge mithilfe des Terminals eine React App.
// Erstelle mindestens 3 Components:
//     Head
//     Firstsection
//     Footer
// Vergiss den Style nicht 😉

// hier müssen Arrays von foods rein,
// damit die foodprobs hier was greifen können

import FoodItem from "../FoodItem/FoodItem";
type Food = {
  id: number;
  title: string;
  description: string;
  price: string;
  img: string;
};

const foodItems: Food[] = [
  {
    id: 1,
    title: "Buddha Bowl",
    description:
      "A colorful bowl with quinoa, roasted vegetables, avocado, and tahini dressing.",
    price: "12.50 €",
    img: "../../../public/img/buddha.jpg",
  },
  {
    id: 2,
    title: "Lasagna",
    description:
      "Lasagna with lentil Bolognese, vegan cheese, and béchamel sauce.",
    price: "11.90 €",
    img: "../../../public/img/lasagna.jpg",
  },
  {
    id: 3,
    title: "Mushroom Oat Burger",
    description:
      "Burger with an oat-mushroom patty, vegan cheddar, lettuce, tomato, and BBQ sauce.",
    price: "10.90 €",
    img: "../../../public/img/burger.jpg",
  },
  {
    id: 4,
    title: "Sushi Platter",
    description: "Maki and nigiri with avocado, cucumber, carrot, and sesame.",
    price: "14.50 €",
    img: "../../../public/img/sushi.jpg",
  },
  {
    id: 5,
    title: "Vegetable Stir-Fry",
    description:
      "Wok-fried vegetables with tofu, cashews, and teriyaki sauce, served with jasmine rice.",
    price: "11.20 €",
    img: "../../../public/img/vegetable.jpg",
  },
  {
    id: 6,
    title: "Margherita Pizza",
    description: "Pizza with tomato sauce, vegan mozzarella, and fresh basil.",
    price: "9.90 €",
    img: "../../../public/img/pizza.jpg",
  },
  {
    id: 7,
    title: "Pumpkin Soup",
    description:
      "Creamy soup made with Hokkaido pumpkin, coconut milk, and ginger.",
    price: "6.50 €",
    img: "../../../public/img/pumpkin.jpg",
  },
  {
    id: 8,
    title: "Tacos",
    description:
      "Three tacos with black beans, guacamole, salsa, and vegan sour cream.",
    price: "10.00 €",
    img: "../../../public/img/tacos.jpg",
  },
  {
    id: 9,
    title: "Alfredo Pasta",
    description:
      "Pasta with a creamy cashew sauce, mushrooms, and fresh parsley.",
    price: "11.80 €",
    img: "../../../public/img/alfredo.jpg",
  },
  {
    id: 10,
    title: "Falafel Plate",
    description: "Falafel with hummus, tabbouleh, flatbread, and tahini sauce.",
    price: "12.00 €",
    img: "../../../public/img/falafel.jpg",
  },
  {
    id: 11,
    title: "Currywurst",
    description: "Vegan sausage with fried potatoes and curry ketchup.",
    price: "9.50 €",
    img: "../../../public/img/currywurst.jpg",
  },
  {
    id: 12,
    title: "Pancakes",
    description: "Fluffy pancakes with maple syrup and fresh berries.",
    price: "7.90 €",
    img: "../../../public/img/pancakes.jpg",
  },
  {
    id: 13,
    title: "Miso Ramen",
    description:
      "Ramen with miso broth, tofu, shiitake mushrooms, and spring onions.",
    price: "13.50 €",
    img: "../../../public/img/ramen.jpg",
  },
  {
    id: 14,
    title: "Spinach Quiche",
    description: "Quiche with spinach, mushrooms, and vegan cream cheese.",
    price: "10.50 €",
    img: "../../../public/img/quiche.jpg",
  },
  {
    id: 15,
    title: "Tiramisu",
    description: "Classic tiramisu with vegan mascarpone and cocoa powder.",
    price: "6.90 €",
    img: "../../../public/img/tiramisu.jpg",
  },
];

//
const Firstsection = () => {
  return (
    <div>
      {foodItems.map((singleFoodItem) => (
        <FoodItem
          key={singleFoodItem.id}
          imageFood={singleFoodItem.img}
          titleFood={singleFoodItem.title}
          descriptionFood={singleFoodItem.description}
          priceFood={singleFoodItem.price}
        />
      ))}
      {/* {foodItems.map((singleFoodItem) => {
        console.log(singleFoodItem);

        return (
          <div>
            <img src={singleFoodItem.img} />
            <h2>{singleFoodItem.title}</h2>
            <p>{singleFoodItem.description}</p>
            <p>{singleFoodItem.price}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default Firstsection;
