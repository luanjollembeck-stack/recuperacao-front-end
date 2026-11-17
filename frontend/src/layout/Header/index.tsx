import { CiHeart } from "react-icons/ci";

export default function Header() {
    return (
        <section className="flex flex-items items-center justify-center relative w-full h-40 ">
            <div className="grid grid-cols-2 gap-240">
                <div className="flex gap-2">
                    <img
                        src="../public/img/logo-icone.svg"
                        alt="Foto de perfil"
                        className="w-7 h-7 object-cover"
                    />
                    <p className="font-black text-blue-950">pet</p>
                    <p className="font-black text-red-600">care</p>
                </div>

                <div className="flex flex-direction gap-2 border-2 px-2 py-2 rounded-lg">
                    <CiHeart size={25}/>
                    <p className="font-black text-blue-950">lista de favoritos</p>
                </div>
            </div>
        </section>
    );
}