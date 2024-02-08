import MenuCard from "../Shared/MenuCard";
import Title from "../../Components/Title";
import useMenu from "../../Hooks/useMenu";
import Button from "../../Components/Button";

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
            <Button btnText={"View All Menu"}></Button>
            <div className="bg-black h-[200px] mt-10 text-center text-white text-4xl font-semibold pt-16">
            Call Us: +88 0192345678910
            </div>
        </section>
    );
};

export default PopularMenu;
