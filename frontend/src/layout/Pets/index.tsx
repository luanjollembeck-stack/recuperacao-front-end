import { HiMiniArrowRight } from "react-icons/hi2";
import Cards from "../../components/PetCard/PetCard";


export default function Pets() {
    return (
        <>
            <section className="flex flex-items items-center justify-center relative w-full h-20 border-b border-orange-400">
                <div className="grid grid-cols-2 gap-300">
                    <div className="flex gap-2 text-4xl">
                        <p className="font-black text-black">Pets</p>
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
                        tipo="Cachorro"
                        nome="Thor"
                        imagem="/img/bidu (1).png"
                        especie="Golden Retriever"
                        tutor="Ana Souza"
                    />

                    <Cards
                        tipo="Gato"
                        nome="Mia"
                        imagem="/img/bidu (1).png"
                        especie="Siamês"
                        tutor="Carlos Lima"
                    />

                    <Cards
                        tipo="Cachorro"
                        nome="Bidu"
                        imagem="/img/bidu (1).png"
                        especie="Beagle"
                        tutor="Juliana Reis"
                    />

                    <Cards
                        tipo="Gato"
                        nome="Luna"
                        imagem="/img/bidu (1).png"
                        especie="SRD"
                        tutor="Pedro Alves"
                    />
                    <Cards
                        tipo="Cachorro"
                        nome="Paçoca"
                        imagem="/img/bidu (1).png"
                        especie="vira-lata caramelo"
                        tutor="Marina Costa"
                    />
                    <Cards
                        tipo="Gato"
                        nome="Frajola"
                        imagem="/img/bidu (1).png"
                        especie="SRD"
                        tutor="Rafael Dias"
                    />
                    <Cards
                        tipo="Gato"
                        nome="Mel"
                        imagem="/img/bidu (1).png"
                        especie="Shih Tzu"
                        tutor="Beatriz Nunes"
                    />
                    <Cards
                        tipo="Gato"
                        nome="Nina"
                        imagem="/img/bidu (1).png"
                        especie="Persa"
                        tutor="Lucas Melo"
                    />

                </div>
            </section>
        </>

    );
}