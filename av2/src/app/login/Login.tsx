'use client';

import React, { useState } from "react";
import styles from "./Login.module.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const navegar = () => {
    router.push("/principal"); 
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      navegar();
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>

      <div className={styles.formGroup}>
        <label htmlFor="usuario" className={styles.label}>Usuário</label>
        <input
          id="usuario"
          className={styles.input}
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite seu usuário"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="senha" className={styles.label}>Senha</label>
        <input
          id="senha"
          className={styles.input}
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua senha"
        />
      </div>

      <button 
        className={styles.button} 
        onClick={navegar}
      >
        Entrar
      </button>
    </div>
  );
}
