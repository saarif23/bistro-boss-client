import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Cover from "../Shared/Cover";
import MenuCard from "../Shared/MenuCard";

const MenuCategory = ({ items, heading, menuBg, subHeading }) => {
    return (
        <>
            {heading && <Cover
                img={menuBg}
                heading={heading}
                subHeading={subHeading}
            > </Cover>}
            <div className=" grid md:grid-cols-2 gap-x-16 gap-y-5 my-10">

                {
                    items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <div className="text-center mb-10">
                <Link to={`/ourShop/${heading}`}> <Button btnText="order your favorite food"></Button></Link>
            </div>
        </>

    );
};

export default MenuCategory;