import Button from "../../Components/Button";

const FoodCard = ({ item }) => {
    const { image, recipe, name, price } = item;
    return (
        <div className="card bg-slate-100 relative">
            <img src={image} alt="" className="" />
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere blanditiis assumenda. Ratione odio illo, sunt voluptas error est molestiae!</p>
                <Button btnText={'Add To Cart'}></Button>
            </div>
            <p className="bg-black px-4 py-2 absolute text-white rounded-lg right-3 top-3 bg-opacity-40">{price}</p>
        </div>
    );
};

export default FoodCard;