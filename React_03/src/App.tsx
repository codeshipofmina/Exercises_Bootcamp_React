import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FoodList from "./components/FoodList/FoodList";
import Firstsection from "./components/Firstsection/Firstsection";

const App = () => {
  return (
    <>
      <Header />
      <FoodList />
      <Firstsection />
      <Footer />
    </>
  );
};

export default App;
