

const MenuCard = ({ item }) => {
    const { image, recipe, name, price } = item;
    return (
        <div className="flex gap-3">
            <img style={{ borderRadius: "0px 200px 200px 200px"}} className="w-[100px]" src={image} alt="" />
            <div>
                <p className="uppercase">{name}----------------</p>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600 "> ${price}</p>
        </div>
    );
};

export default MenuCard;