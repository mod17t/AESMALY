const ValueCard = ({ title, description, image, icon, colors }) => {
  return (
    <div
      className={`flex flex-col w-full max-w-sm md:max-w-none mx-auto rounded-2xl overflow-hidden shadow-lg bg-white border-b-[6px] ${colors.border}`}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="flex flex-col items-center px-6 pb-6 flex-1">
        <div
          className={`${colors.bg} -mt-8 rounded-full p-3 border-4 border-white`}
        >
          <img src={icon} alt="" className="w-12 h-12 object-contain" />
        </div>
        <h3 className={`text-xl font-bold mt-3 ${colors.text}`}>{title}</h3>
        <p className="text-sm text-gray-600 text-center mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
