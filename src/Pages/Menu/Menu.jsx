import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import Title from "../../Components/Title";
import MenuCategory from "./MenuCategory";
import useMenu from "../../Hooks/useMenu";

const Menu = () => {
    const [menu] = useMenu();

    const offereds = menu.filter(item => item.category === "offered")
    const desserts = menu.filter(item => item.category === "dessert")
    const pizzas = menu.filter(item => item.category === "pizza")
    const salads = menu.filter(item => item.category === "salad")
    const soups = menu.filter(item => item.category === "soup")
    return (
        <>
            <Helmet>
                <title>Bistro Boos || Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover
                img={"https://i.ibb.co/VWw7jw4/banner3.jpg"}
                heading="Our Menu"
                subHeading="Would You Like to try a dish"
            > </Cover>

            {/* offered section */}
            <Title
                subHeading={"Don't Miss"}
                heading={"today's offer"}
            ></Title>

            <MenuCategory
                items={offereds}
            ></MenuCategory>

            {/* dessert menu section */}
            <MenuCategory
                heading={"dessert"}
                subHeading={'Desserts can be defined as a usually sweeter course that concludes a meal. This definition includes a range of courses ranging from fruits or dried nuts to multi-ingredient cakes and pies. Many cultures have different variations of dessert.'}
                items={desserts}
                menuBg={'https://i.ibb.co/FYVvK0f/dessert-bg.jpg'}
            ></MenuCategory>
            {/* pizza menu section */}
            <MenuCategory
                heading={"pizza"}
                subHeading={'Desserts can be defined as a usually sweeter course that concludes a meal. This definition includes a range of courses ranging from fruits or dried nuts to multi-ingredient cakes and pies. Many cultures have different variations of dessert.'}
                items={pizzas}
                menuBg={'https://i.ibb.co/wQ2pChS/pizza-bg.jpg'}
            ></MenuCategory>
            {/* Salads menu section */}
            <MenuCategory
                heading={"salad"}
                subHeading={'Desserts can be defined as a usually sweeter course that concludes a meal. This definition includes a range of courses ranging from fruits or dried nuts to multi-ingredient cakes and pies. Many cultures have different variations of dessert.'}
                items={salads}
                menuBg={'https://i.ibb.co/Qkqqk5G/salad-bg.jpg'}
            ></MenuCategory>
            {/* soups menu section */}
            <MenuCategory
                heading="soup"
                subHeading={'Desserts can be defined as a usually sweeter course that concludes a meal. This definition includes a range of courses ranging from fruits or dried nuts to multi-ingredient cakes and pies. Many cultures have different variations of dessert.'}
                items={soups}
                menuBg={'https://i.ibb.co/WcLszH0/soup-bg.jpg'}
            ></MenuCategory>




        </>
    );
};

export default Menu;