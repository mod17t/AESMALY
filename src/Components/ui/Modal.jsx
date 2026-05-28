const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center backdrop-blur-sm bg-black/40">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-sm mx-4 overflow-hidden text-center">
        {/* Tricolor top band */}
        <div className="flex h-1">
          <div className="flex-1 bg-[#14A44D]" />
          <div className="flex-1 bg-[#FDD835]" />
          <div className="flex-1 bg-[#CE1126]" />
        </div>

        <div className="px-8 py-8">
          {/* Icon circle */}
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
            <img src="/success.png" className="w-7 h-7" alt="Succès" />
          </div>

          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Message envoyé avec succès !
          </h2>
          <p className="text-sm text-gray-500 mb-7">
            Nous vous répondrons dans les plus brefs délais.
          </p>

          <button
            onClick={closeModal}
            className="w-full py-2.5 rounded-lg bg-[#14A44D] text-white font-medium text-sm hover:bg-green-700 transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
