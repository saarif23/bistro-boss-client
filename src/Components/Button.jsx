/* eslint-disable react/prop-types */
const Button = ({ btnText }) => {
  return (
    <div className="uppercase border-b-4 mx-auto text-center font-semibold hover:animate-pulse  w-96 border-black hover:bg-black hover:text-white  rounded-xl px-5 py-2 shadow-lg">
      {btnText}
    </div>
  );
};

export default Button;
