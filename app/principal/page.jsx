"use client";

import { useState } from "react";
import Link from "next/link";

const productsMock = [
  {
    id: 1,
    name: "Trufa Tradicional",
    description: "Deliciosa trufa de chocolate ao leite",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Tablete 70% Cacau",
    description: "Chocolate intenso para os amantes de cacau",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 1,
    name: "Trufa Tradicional",
    description: "Deliciosa trufa de chocolate ao leite",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Tablete 70% Cacau",
    description: "Chocolate intenso para os amantes de cacau",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 1,
    name: "Trufa Tradicional",
    description: "Deliciosa trufa de chocolate ao leite",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Tablete 70% Cacau",
    description: "Chocolate intenso para os amantes de cacau",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 1,
    name: "Trufa Tradicional",
    description: "Deliciosa trufa de chocolate ao leite",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Tablete 70% Cacau",
    description: "Chocolate intenso para os amantes de cacau",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 1,
    name: "Trufa Tradicional",
    description: "Deliciosa trufa de chocolate ao leite",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Tablete 70% Cacau",
    description: "Chocolate intenso para os amantes de cacau",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 1,
    name: "Trufa Tradicional",
    description: "Deliciosa trufa de chocolate ao leite",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Tablete 70% Cacau",
    description: "Chocolate intenso para os amantes de cacau",
    image: "https://via.placeholder.com/300",
  },
];

export default function HomePage() {
  const [comments, setComments] = useState({});
  const [ratings, setRatings] = useState({});

  const handleCommentChange = (id, value) => {
    setComments({ ...comments, [id]: value });
  };

  const handleRating = (id, value) => {
    setRatings({ ...ratings, [id]: value });
  };

  return (
    <div className="min-h-screen bg-[#f8f5f2]">

      {/* NAVBAR */}
      <nav className="w-full bg-[#3b1f1f] text-white px-6 py-4 flex items-center justify-between shadow-md">
        
        {/* LOGO */}
<img
  src="https://www.cacaushow.com.br/on/demandware.static/Sites-CacauShow-Site/-/default/dwe3ceaed4/svg/logo_cacau_show.svg"
  alt="Cacau Show"
  className="h-10"
/>

        {/* BOTÕES */}
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-[#3b1f1f] transition"
          >
            Entrar
          </Link>

          <Link
            href="/register"
            className="px-4 py-2 rounded-lg bg-white text-[#3b1f1f] hover:bg-gray-200 transition"
          >
            Cadastrar
          </Link>
        </div>
      </nav>

      {/* CONTEÚDO */}
      <div className="p-6">

        <h1 className="text-4xl font-bold text-center text-[#3b1f1f] mb-10">
          Avalie nossos produtos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {productsMock.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col gap-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl w-full h-48 object-cover"
              />

              <h2 className="text-xl font-semibold text-[#3b1f1f]">
                {product.name}
              </h2>

              <p className="text-sm text-gray-600">
                {product.description}
              </p>

              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRating(product.id, star)}
                    className={`text-2xl ${
                      (ratings[product.id] || 0) >= star
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>

              <input
                type="text"
                placeholder="Deixe um comentário..."
                className="text-black border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3b1f1f]"
                value={comments[product.id] || ""}
                onChange={(e) =>
                  handleCommentChange(product.id, e.target.value)
                }
              />

              <button
                className="bg-[#3b1f1f] text-white py-2 rounded-lg hover:bg-[#2a1414]"
                onClick={() => {
                  console.log({
                    produto: product.name,
                    nota: ratings[product.id],
                    comentario: comments[product.id],
                  });
                  alert("Avaliação enviada!");
                }}
              >
                Enviar avaliação
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}