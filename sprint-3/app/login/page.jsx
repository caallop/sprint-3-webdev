"use client"; 
import Navbar from "../components/Nav"; 

export default function LoginPage() {
  return (
    <div className="">
      <Navbar /> 
      
      <main className="">
        <div className="login container">
          <h1 className="titulo-login">Login - Raluguva</h1>
          
          <form className="entrada">
            <div>
              <label className="">Email</label>
              <input type="email" className="" />
            </div>
            <div>
              <label className="">Senha</label>
              <input type="password" className="" />
            </div>
            
            <button className="">
              Entrar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}