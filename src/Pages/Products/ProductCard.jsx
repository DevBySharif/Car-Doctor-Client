const ProductCard = ({ product }) => {
  const { image, product_name, rating, price } = product;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={product_name}
          className="rounded-xl h-[200px] w-full"
        />
      </figure>
      <div className="px-9 py-6 space-y-2">
        <h2 className="card-title">{product_name}</h2>
        <div className="flex justify-between items-center">
          <p className="text-xl text-[#FF3811] font-bold">Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
