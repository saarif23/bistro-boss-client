import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";

const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    // console.log(category);
    const [tabIndex, setTabIndex] = useState(initialIndex)

    const [menu] = useMenu();

    const salads = menu.filter(item => item.category === "salad")
    const pizzas = menu.filter(item => item.category === "pizza")
    const soups = menu.filter(item => item.category === "soup")
    const desserts = menu.filter(item => item.category === "dessert")
    const drinks = menu.filter(item => item.category === "drinks")

    return (
        <div className="mb-10">

            <Helmet>
                <title>Bistro Boos || Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover
                img={"https://i.ibb.co/f8Rc009/banner2.jpg"}
                heading="Our Shop"
                subHeading="Would You Like to try a dish"
            > </Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-center py-10">
                    <Tab>Salads</Tab>
                    <Tab>Pizzas</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel><OrderTab items={salads}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={pizzas}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={soups}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={desserts}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={drinks}></OrderTab></TabPanel>

            </Tabs>


        </div>
    );
};

export default OurShop;