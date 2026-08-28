"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Nav";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [usuarioLogado, setUsuarioLogado] = useState("");
    
    const router = useRouter(); 

    useEffect(() => {
        const carregarDados = () => {
            const emailSalvo = localStorage.getItem("raluguva_email");
            if (emailSalvo) {
                setUsuarioLogado(emailSalvo.split("@")[0]);
            }
        };
        carregarDados();
    }, []);

    const handleLogin = (evento) => {
        evento.preventDefault(); 
        
        if (!email.trim() || !senha.trim()) return;

        localStorage.setItem("raluguva_email", email);
        setUsuarioLogado(email.split("@")[0]);
        
        setEmail("");
        setSenha("");

        router.push("/");
    };

    const apagarUsuario = () => {
        localStorage.removeItem("raluguva_email");
        setUsuarioLogado("");
    };

    return (
        <div>
            <Navbar />

            <main className="container">
                <div className="login container">
                    <h1>LOGIN</h1>

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

                    {/* Bloco renderizado apenas se houver usuário salvo */}
                    {usuarioLogado && (
                        <div className="historico-login">
                            <h3 className="historico-titulo">Último acesso</h3>
                            <ul className="historico-lista">
                                <li className="historico-item">
                                    <span>{usuarioLogado}</span>
                                    <button onClick={apagarUsuario} className="btn-apagar">
                                        Apagar
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                    
                </div>
            </main>
        </div>
    );
}