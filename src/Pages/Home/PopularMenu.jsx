import MenuCard from "../Shared/MenuCard";
import Title from "../../Components/Title";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popularMenu = menu.filter(item => item.category === "popular")
    return (
        <section>
            <Title
                subHeading={"Check it out"}
                heading={"From our menu"}>

            </Title>
            <div className=" grid md:grid-cols-2 gap-x-16 gap-y-5 my-10">
                {
                    popularMenu.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }

            </div>
        </section>
    );
};

export default PopularMenu;
