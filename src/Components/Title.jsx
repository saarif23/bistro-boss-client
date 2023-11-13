
const Title = ({ heading, subHeading }) => {
    return (
        <div className="w-4/12 mx-auto my-5 pt-10 text-center">
            <p className="text-yellow-500  italic pb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl font-semibold border-y-4 py-2 uppercase">{heading}</h3>

        </div>
    );
};

export default Title;