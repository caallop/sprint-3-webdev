"use client";
import { useState } from "react";
import Navbar from "../components/Nav";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = (evento) => {
        evento.preventDefault(); 
        
        if (!email.trim() || !senha.trim()) return;

        localStorage.setItem("raluguva_email", email);
        
         ("");
        setSenha("");
    };

    return (
        <div className="">
            <Navbar />

            <main className="container">
                <div className="login container">
                    <h1 className="titulo-login">Login - Raluguva</h1>

                    <form className="entrada" onSubmit={handleLogin}>
                        <div>
                            <label className="">Email</label>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div>
                            <label className="">Senha</label>
                            <input 
                                type="password" 
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Entrar
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}