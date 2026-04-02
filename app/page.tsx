"use client";

import { useState } from "react";

const productsMock = [
  {
    id: 1,
    name: "Trufa Tradicional",
    description: "Deliciosa trufa de chocolate ao leite",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSPELkdKALWBS7Eb_jibZ_IDr3Na4A1AYmdvnO4G9tVVu-M2ueiHS63W4yW2_4yA4-2ecVgG_inAaHb7gVeKVYYOVxXoYIAG__eWu7ZnrbBSBgCLg1vzLY-",
  },
  {
    id: 2,
    name: "Tablete 70% Cacau",
    description: "Chocolate intenso para os amantes de cacau",
    image: "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    name: "Ovo de páscoa recheado LaCreme 400g",
    description: "Ovo de páscoa recheado LaCreme, delicioso e crocante 400g",
    image: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw64b5ed21/large/1003275_1.png",
  },
  {
    id: 4,
    name: "Caixa de Bombons",
    description: "Caixa de Bombons Mini Show Classicos Sortidos 108g",
    image: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw5709fcec/large/1003377_1.png",
  },
  {
    id: 5,
    name: "Ovo de Páscoa Bob Esponja",
    description: "Ovo de Páscoa Pelúcia Bob Esponja 170g",
    image: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw73b13cd0/medium/1003960_1.png",
  },
  {
    id: 6,
    name: "Ovo de páscoa CBF",
    description: "Ovo de Páscoa ao Leite Bola CBF Chocoesportes 170gS",
    image: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwa94b8655/large/1003902_1.png",
  },
   {
    id: 7,
    name: "Caixa de Bombons LaCreme kids",
    description: "Caixa de Bombons laCreme Kids 108g",
    image: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwda3cae2d/large/1003368_1.png",
  },
  {
    id: 8,
    name: "Tablete 20g",
    description: "Tablete laCreme de Chocolate Branco 20g",
    image: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwd1df6de2/large/1002636_1.png",
  },
  {
    id: 9,
    name: "Tablete Pistache 100g",
    description: "Tablete laCreme de Chocolate Branco com Pistache 100g",
    image: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw58766799/large/1003788_1.png",
  },
   {
    id: 10,
    name: "Drageado LaNut ao Leite e Avelã 150g",
    description: "Drageado LaNut ao Leite e Avelã 150g",
    image: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw5dc052a3/large/1000003_1.png",
  },
  {
    id: 11,
    name: "Tablete Cacau Magia ao Leite Decorado 40g",
    description: "Tablete Cacau Magia ao Leite Decorado 40g",
    image: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwa15effbb/large/1003220_1.png",
  },
  {
    id: 12,
    name: "Slack Pistache 290g",
    description: "Slack Pistache 290g",
    image: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwfef96cf0/large/1003639_1.png",
  },
   {
    id: 13,
    name: "Wafer LaNut Recheio Avelã 80g",
    description: "Wafer LaNut Recheio Avelã 80g",
    image: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw931cdbce/large/1003082_1.png",
  },
  {
    id: 14,
    name: "Ovo Coelho Cacau Magia ao Leite 40g",
    description: "Ovo Coelho Cacau Magia ao Leite 40g",
    image: "https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwba65c1e4/large/1003584_1.png",
  },
];

export default function HomePage() {
  const [comments, setComments] = useState<{ [key: number]: string }>({});
  const [ratings, setRatings] = useState<{ [key: number]: number }>({});

  const handleCommentChange = (id: number, value: string) => {
    setComments({ ...comments, [id]: value });
  };

  const handleRating = (id: number, value: number) => {
    setRatings({ ...ratings, [id]: value });
  };

  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      
      {/* HEADER */}
      <header className="bg-[#3b1f1f] text-white px-6 py-4 flex items-center justify-between shadow-md">
        
        <h1 className="text-2xl font-bold tracking-wide">
          🍫 Cacau Show
        </h1>

        <div className="flex items-center gap-4">
          <button className="hover:underline">
            Acessar
          </button>

          <button className="bg-white text-[#3b1f1f] px-3 py-1 rounded-lg font-semibold hover:bg-gray-200 transition">
            Cadastrar
          </button>

          <button className="text-xl hover:rotate-90 transition duration-300">
            ⚙️
          </button>
        </div>
      </header>

      {/* CONTEÚDO */}
      <div className="p-6">
        
        <h2 className="text-4xl font-bold text-center text-[#3b1f1f] mb-10">
          Avalie nossos produtos 🍫
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-18 max-w-6xl mx-auto">
          {productsMock.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col gap-4"
            >
              
              {/* IMAGEM */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl w-full h-48 object-cover"
              />

              {/* INFO */}
              <h3 className="text-xl font-semibold text-[#3b1f1f]">
                {product.name}
              </h3>

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
    </div>
  );
}