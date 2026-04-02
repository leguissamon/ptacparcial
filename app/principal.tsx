"use client";

import { useState } from "react";

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
    id: 3,
    name: "Caixa de Bombons",
    description: "Seleção especial de bombons variados",
    image: "https://via.placeholder.com/300",
  },
   {
    id: 4,
    name: "Trufa Tradicional",
    description: "Deliciosa trufa de chocolate ao leite",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 5,
    name: "Tablete 70% Cacau",
    description: "Chocolate intenso para os amantes de cacau",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 6,
    name: "Caixa de Bombons",
    description: "Seleção especial de bombons variados",
    image: "https://via.placeholder.com/300",
  },
   {
    id: 7,
    name: "Trufa Tradicional",
    description: "Deliciosa trufa de chocolate ao leite",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 8,
    name: "Tablete 70% Cacau",
    description: "Chocolate intenso para os amantes de cacau",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 9,
    name: "Caixa de Bombons",
    description: "Seleção especial de bombons variados",
    image: "https://via.placeholder.com/300",
  },
   {
    id: 10,
    name: "Trufa Tradicional",
    description: "Deliciosa trufa de chocolate ao leite",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 11,
    name: "Tablete 70% Cacau",
    description: "Chocolate intenso para os amantes de cacau",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 12,
    name: "Caixa de Bombons",
    description: "Seleção especial de bombons variados",
    image: "https://via.placeholder.com/300",
  },
   {
    id: 13,
    name: "Trufa Tradicional",
    description: "Deliciosa trufa de chocolate ao leite",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 14,
    name: "Tablete 70% Cacau",
    description: "Chocolate intenso para os amantes de cacau",
    image: "https://via.placeholder.com/300",
  },
];

export default function HomePage() {
  const [comments, setComments] = useState<{[key: number]: string}>({});
  

  const [ratings, setRatings] = useState<{[key: number]: number}>({});

  const handleCommentChange = (id: number, value: string) => {
    setComments({ ...comments, [id]: value });
  };

  const handleRating = (id: number, value: number) => {
    setRatings({ ...ratings, [id]: value });
  };

  return (
    <div className="min-h-screen bg-[#f8f5f2] p-6">
      {/* HEADER */}
      <h1 className="text-4xl font-bold text-center text-[#3b1f1f] mb-10">
        🍫 Avalie nossos produtos
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {productsMock.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col gap-4"
          >
            {/* IMAGEM */}
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl w-full h-48 object-cover"
            />

            {/* INFO */}
            <h2 className="text-xl font-semibold text-[#3b1f1f]">
              {product.name}
            </h2>
            <p className="text-sm text-gray-600">
              {product.description}
            </p>

            {/* ESTRELAS */}
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRating(product.id, star)}
                  className={`text-2xl transition ${
                    (ratings[product.id] || 0) >= star
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>

            {/* INPUT */}
            <input
              type="text"
              placeholder="Deixe um comentário..."
              className="border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3b1f1f]"
              value={comments[product.id] || ""}
              onChange={(e) =>
                handleCommentChange(product.id, e.target.value)
              }
            />

            {/* BOTÃO */}
            <button
              className="bg-[#3b1f1f] text-white py-2 rounded-lg hover:bg-[#2a1414] transition"
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
  );
}