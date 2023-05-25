"use client";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase.config";
import toast, { Toaster } from "react-hot-toast";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const addData = async (data) => {
  if (data.length > 0) {
    const docRef = await addDoc(collection(db, "suscriptores"), {
      email: data,
    });
    toast.success("Enviado!", {
      iconTheme: {
        primary: "#FFBAA9",
        secondary: "fff",
      },
      position: "bottom-center",
      duration: 4000,
    });
    emailjs.sendForm(
      "service_qignov6",
      "template_s88d7bn",
      form.current,
      "nw7rKIWDscrO5QDcJ"
    );
    console.log("Document written with ID: ", docRef.id);
  } else {
    console.log("No hay datos para enviar");
  }
};

export default function newslatter() {
  const [email, setEmail] = useState("");
  const form = useRef();

  return (
    <section>
      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className="font-bold text-2xl md:text-3xl text-[#643E17]">
          Suscribete para recibir nuestro Libro de Recetas
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addData(email);
          }}
          ref={form}
        >
          <div className="py-4">
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="shadow border border-[#FFBAA9] rounded w-9/12 py-3 px-3
            text-[#643E17] focus:outline-none focus:shadow-outline"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>

          <button className="bg-[#FFBAA9] px-20 py-3 rounded-full text-white text-xl uppercase">
            Lo quiero!
          </button>
        </form>
      </div>
      <Toaster />
    </section>
  );
}
