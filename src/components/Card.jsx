const Card = ({ image, name, comment }) => {
  return (
    <div className="bg-veryLightGray relative mx-4 md:mx-auto space-y-6 p-6 flex flex-col md:w-1/3 items-center rounded-lg scroll-m-6 snap-center">
      <img
        className="absolute -top-7 w-16 aspect-square"
        src={image}
        alt={`${name}'s profile`}
      />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-darkGrayishBlue">{comment}</p>
    </div>
  );
};
export default Card;
