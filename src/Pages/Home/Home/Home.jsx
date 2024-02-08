import { Helmet } from "react-helmet-async";
import Banner from "../Banner";
import Category from "../Category";
import Factures from "../Factures";
import PopularMenu from "../PopularMenu";
import Reviews from "../Reviews";
import Recomendation from "../Recomendation";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boos || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Recomendation/>
      <Factures></Factures>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
