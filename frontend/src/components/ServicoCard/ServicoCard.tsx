type CardProps = {
  titulo: string;
  descricao: string;
  icone: string;
  backgroundColor?: string;
};

export default function Cards({
  titulo,
  descricao,
  icone,
  backgroundColor = "bg-white",
}: CardProps) {
  return (
    <div
      className={`${backgroundColor} border border-gray-200 hover:border-orange-700 hover:bg-orange-50 rounded-2xl p-5 flex flex-col items-start text-left transition`}
    >
      <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
        <img src={icone} alt={titulo} className="w-5 h-5 object-contain" />
      </div>

      <h3 className="text-base font-bold text-gray-900">{titulo}</h3>

      <p className="text-xs text-gray-500 mt-1 mb-4">{descricao}</p>

      <a
        href="#"
        className="text-xs font-semibold text-orange-700 flex items-center gap-1 hover:underline"
      >
        Saiba mais <span>→</span>
      </a>
    </div>
  );
}
