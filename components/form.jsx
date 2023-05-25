"use client";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase.config";
import React from "react";
import toast from "react-hot-toast";

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
    fetch("https://formsubmit.co/ajax/pasteleriasaludable.naty@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: data,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    console.log("Document written with ID: ", docRef.id);
  } else {
    console.log("No hay datos para enviar");
  }
};

export default function Form() {
  const [email, setEmail] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addData(email);
      }}
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
  );
}
