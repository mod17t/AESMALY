
const titleColorMap = {
  green: "text-[#1B6B35]",
  amber: "text-[#C98A00]",
  red: "text-[#B82D2D]",
  darkgreen: "text-[#0F4D25]",
};

const iconBgMap = {
  green: "bg-[#1B6B35]",
  amber: "bg-[#C98A00]",
  red: "bg-[#B82D2D]",
  darkgreen: "bg-[#0F4D25]",
};

const ActivityCard = ({
  title,
  images = [],
  icon,
  description,
  titleColor = "green",
}) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-gray-300 shadow-sm px-3 pt-4 pb-5 sm:px-5 md:px-6 md:pt-5">
      
      <h2
        className={`text-base sm:text-lg font-semibold mb-3 ${titleColorMap[titleColor]}`}
      >
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
        {images.map((src, i) => (
          <div
            key={i}
            className="aspect-video rounded-xl overflow-hidden bg-stone-100"
          >
            <img
              src={src}
              alt={`${title} image ${i + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Icône + description */}
      <div className="flex items-start gap-3 mt-4">
        <div
          className={`shrink-0 w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center ${iconBgMap[titleColor]}`}
        >
          <img
            src={icon}
            alt=""
            className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            aria-hidden="true"
          />
        </div>
        <p className="text-xs sm:text-sm leading-relaxed text-stone-700 font-">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
