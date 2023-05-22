export default function newslatter() {
  return (
    <section>
      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className="font-bold text-2xl md:text-3xl text-[#643E17]">
          Suscribete para recibir nuestro Libro de Recetas
        </h1>

        <div className="py-4">
          <input
            type="text"
            className="shadow border rounded w-9/12 py-3 px-3
            text-[#643E17] focus:outline-none focus:shadow-outline"
            placeholder="Ingresa tu correo electrónico"
          />
        </div>

        <button className="bg-[#FFBAA9] px-20 py-3 rounded-full text-white text-xl uppercase">
          Lo quiero!
        </button>
      </div>
    </section>
  );
}
