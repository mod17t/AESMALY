import { X } from "lucide-react";

const ErrorModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center backdrop-blur-sm bg-black/40">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-sm mx-4 overflow-hidden text-center">
        <div className="flex h-1">
          <div className="flex-1 bg-[#14A44D]" />
          <div className="flex-1 bg-[#FDD835]" />
          <div className="flex-1 bg-[#CE1126]" />
        </div>

        <div className="px-8 py-8">
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-5">
            <X className="w-7 h-7 text-red-600" />
          </div>

          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Échec de l'envoi
          </h2>
          <p className="text-sm text-gray-500 mb-7">
            Une erreur est survenue. Veuillez réessayer ou nous contacter
            directement par e-mail.
          </p>

          <button
            onClick={closeModal}
            className="w-full py-2.5 rounded-lg bg-red-600 text-white font-medium text-sm hover:bg-red-700 transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
