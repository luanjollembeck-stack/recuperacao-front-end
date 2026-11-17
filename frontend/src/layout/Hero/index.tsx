

export default function Hero() {
    return (
        <header className="flex flex-items items-center justify-center background-blue-800">
            <section className="bg-[#1D2844] rounded-2xl p-10 flex items-center">
                <div className="">
                    <img
                        src="../public/img/hero (1).svg"
                        alt="Foto de perfil"
                        className="w-120 h-120"
                    />
                </div>

                <div className="flex flex-col gap-y-25">
                    <p className="font-black text-orange-400 background-blue-950">Patinhas feliz, tutores tranquilos.</p>
                    <p className="font-black text-white text-5xl">Cuidado completo <br></br> em um só <span className="text-orange-400">lugar.</span></p>
                    <p className="font-black text-white text-2xl">Clientes, pets e serviços organizados para o <br/>atendimento do dia a dia.</p>
                </div>
            </section>
        </header>
    );
}