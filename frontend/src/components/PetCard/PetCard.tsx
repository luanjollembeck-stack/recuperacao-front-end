type CardProps = {
  tipo: string;
  nome: string;
  imagem: string;
  especie: string;
  tutor: string;
  backgroundColor?: string;
};

export default function Cards({
  tipo,
  nome,
  imagem,
  especie,
  tutor,
  backgroundColor = "bg-white",
}: CardProps) {
  return (
    <div className={`${backgroundColor} border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm`}>
      
      <img
        src={imagem}
        alt={nome}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />

      <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
        {tipo}
      </span>

      <h2 className="text-lg font-bold text-gray-800">{nome}</h2>

      <p className="text-sm text-gray-500">{especie}</p>

      <p className="text-sm text-gray-600 mt-1 mb-4">
        Tutor: <strong>{tutor}</strong>
      </p>

      <button className="w-full border border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white font-semibold py-2 rounded-lg transition">
        Saiba mais
      </button>

    </div>
  );
}
