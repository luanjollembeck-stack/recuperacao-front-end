export default function Footer(){
    return (
        <footer className="w-full bg-[#1C2536] flex items-center justify-center mt-8 p-4">
            <section className="">
                <div>
                       <div className="flex gap-2">
                    <img
                        src="../public/img/logo-icone.svg"
                        alt="Foto de perfil"
                        className="w-7 h-7 object-cover"
                    />
                    <p className="font-black text-white">pet</p>
                    <p className="font-black text-orange-600">care</p>
                </div>
                </div>
            </section>
        </footer>
    )
}