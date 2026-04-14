const ValueCard = ({ title, description, image, icon, colors }) => {
  return (
    <div
      className={`flex flex-col w-full h-96 rounded-2xl overflow-hidden shadow-lg bg-white border-b-7 ${colors.border}`}
    >
      <div className={`h-38 w-full`}>
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>

      <div className="flex flex-col items-center px-6 pb-6">
        <div
          className={`${colors.bg} -mt-8 rounded-full p-3  border-4 border-white `}
        >
          <img src={icon} alt="icone" className="w-12 h-12 object-contain " />
        </div>
        <h3 className={`text-xl font-bold mt-3 ${colors.text}`}>{title}</h3>
        <p className={`text-sm text-gray-600 text-center mt-2 `}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
