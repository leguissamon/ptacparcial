"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-svh flex items-center justify-center bg-[#3b1f1f]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-xl">
        {/* Left side - Branding */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#5a2d2d] text-white p-10">
          <h1 className="text-3xl font-bold mb-4">Cacau Show</h1>
          <p className="text-sm text-center max-w-xs">
            Crie sua conta e descubra um mundo de chocolates incríveis 🍫
          </p>
        </div>

        {/* Right side - Form */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6 text-[#3b1f1f]">
            Criar uma conta
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              if (!name || !email || !password) {
                alert("Preencha todos os campos");
                return;
              }

              console.log(name, email, password);
            }}
            className="flex flex-col gap-4"
          >
            <Input
              className="bg-white text-black placeholder:text-gray-500"
              type="text"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <Input
              className="bg-white text-black placeholder:text-gray-500"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              className="bg-white text-black placeholder:text-gray-500"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button
              type="submit"
              className="bg-[#3b1f1f] hover:bg-[#3d1717] text-white"
            >
              Criar conta
            </Button>

            <div className="text-xs text-gray-500 text-center">
              Já tem conta? <Link href="/page">Entrar</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
