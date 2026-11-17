import { HiMiniArrowRight } from "react-icons/hi2";
import Cards from "../../components/ServicoCard/ServicoCard";

export default function Servicos() {
    return (
        <>
            <section className="flex flex-items items-center justify-center relative w-full h-20 border-b border-orange-400">
                <div className="grid grid-cols-2 gap-300">
                    <div className="flex gap-2 text-4xl">
                        <p className="font-black text-black">Serviços</p>
                    </div>

                    <div className="flex flex-direction mt-4">
                        <div className="flex flex-direction text-orange-400">
                            <p className="">Ver todos</p>
                            <HiMiniArrowRight size={25} />
                        </div>
                    </div>
                </div>
            </section>


            <section className="">
                <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6">

  
      <Cards
        titulo="Banho e tosa"
        descricao="Seg a Sáb • 1h30"
        icone="/calendario.png"
      />

      <Cards
        titulo="Consulta veterinária"
        descricao="Agendamento • 40 min"
        icone="/calendario.png"
      />

      <Cards
        titulo="Vacinação"
        descricao="V10, antirrábica"
        icone="/calendario.png"
      />

      <Cards
        titulo="Hospedagem"
        descricao="Diária com recreação"
        icone="/calendario.png"
      />

      <Cards
        titulo="Adestramento"
        descricao="Pacote de 8 aulas"
        icone="/calendario.png"
      />

                </div>
            </section>
        </>

    );
}