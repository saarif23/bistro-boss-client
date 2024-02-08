
import Title from "../../Components/Title";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../Shared/FoodCard";

const Recomendation = () => {
  const [menu] = useMenu();
  const offeredMenu = menu.filter((item) => item.category === "offered");
  return (
    <section>
      <Title subHeading={"Check it out"} heading={"From our menu"}></Title>
      <div className=" grid md:grid-cols-3 gap-8 rounded-md my-10">
        {offeredMenu.slice(0, 3).map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </section>
  );
};

export default Recomendation;
