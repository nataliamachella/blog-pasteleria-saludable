import { Toaster } from "react-hot-toast";
import Form from "./form";

export default function Newslatter() {
  return (
    <section>
      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className="font-bold text-2xl md:text-3xl text-[#643E17]">
          Suscribete para recibir nuestro Libro de Recetas
        </h1>
        <Form />
      </div>
      <Toaster />
    </section>
  );
}
