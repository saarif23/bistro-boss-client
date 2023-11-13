
const Cover = ({ img, heading, subHeading }) => {
    return (
        <div className="h-[500px] bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${img})` }}>
            <div className="text-white text-center space-y-3 bg-black bg-opacity-40 w-2/3 mx-auto p-20 uppercase ">
                <h3 className="text-5xl font-bold text-white ">{heading}</h3>
                <p>{subHeading}</p>

            </div>
        </div>
    );
};

export default Cover;