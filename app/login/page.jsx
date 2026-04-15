"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-svh flex items-center justify-center bg-[#3b1f1f]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-xl">
        {/* Left side - Branding */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#5a2d2d] text-white p-10">
          <h1 className="text-3xl font-bold mb-4">Cacau Show</h1>
          <p className="text-sm text-center max-w-xs">
            Entre e aproveite ofertas exclusivas e chocolates incríveis 🍫
          </p>
        </div>

        {/* Right side - Form */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6 text-[#3b1f1f]">
            Entrar na sua conta
          </h2>

          <div className="flex flex-col gap-4">
            <Input
              className="text-black"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
             className ="text-black"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button className="bg-[#3b1f1f] hover:bg-[#3d1717] text-white">
              Entrar
            </Button>

            <div className="flex justify-between text-xs text-gray-500">
              <a href="#">Esqueci minha senha</a>
              <Link href="/register">Criar conta</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
