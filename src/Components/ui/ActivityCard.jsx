import { useState } from "react";
import { X } from "lucide-react";

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
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="w-full bg-white rounded-2xl shadow-sm shadow-stone-200 border border-stone-100 px-4 pt-5 pb-5 sm:px-6 md:px-8 md:pt-6">
        <h2
          className={`text-base sm:text-lg font-semibold mb-4 ${titleColorMap[titleColor]}`}
        >
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {images.map((src, i) => (
            <div
              key={i}
              className="aspect-4/3 rounded-xl overflow-hidden bg-stone-100 cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`${title} image ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 mt-5 pt-4 border-t border-stone-100">
          <div
            className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${iconBgMap[titleColor]}`}
          >
            <img
              src={icon}
              alt=""
              className="w-5 h-5 object-contain"
              aria-hidden="true"
            />
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-stone-600">
            {description}
          </p>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <img
            src={selectedImage}
            alt=""
            className="max-w-full max-h-[90vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ActivityCard;
