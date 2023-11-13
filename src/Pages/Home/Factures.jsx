import Title from "../../Components/Title";

const Factures = () => {
    return (
        <div style={{backgroundImage: 'url("https://i.ibb.co/8zb70Zz/featured.jpg")'}} className="p-10  bg-black bg-blend-overlay bg-opacity-40  bg-cover text-white my-10">
            <Title
                subHeading="Check it out"
                heading="Feactures Menu"
            ></Title>
            <div className="md:flex  gap-10 px-28  justify-center items-center my-10">
                <img className="w-1/3 flex-1 " src="https://i.ibb.co/8zb70Zz/featured.jpg" alt="" />
                <div className="flex-1 space-y-3">
                    <p>Nov 12 2023</p>
                    <p className="uppercase">Where can i get some ?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt amet possimus repellendus a modi animi pariatur quam culpa fugit saepe, libero dolore, temporibus incidunt nemo ut quas! Quam et labore laboriosam laborum sit esse dolor assumenda expedita </p>
                </div>
            </div>
        </div>
    );
};

export default Factures;

//https://i.ibb.co/8zb70Zz/featured.jpg