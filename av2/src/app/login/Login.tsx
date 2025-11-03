'use client';

import React, { useState } from "react";
import styles from "./Login.module.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const fazerLogin = () => {
    let userRole = 'funcionario';

    if (usuario === "admin" && senha === "admin123") {
      userRole = 'administrador';
    } else if (usuario === "tecnico" && senha === "tecnico123") {
      userRole = 'tecnico';
    } else if (usuario === "funcionario" && senha === "func123") {
      userRole = 'funcionario';
    } else {
      alert("Credenciais inválidas! Use: admin/admin123, gerente/gerente123, tecnico/tecnico123, funcionario/func123");
      return;
    }

    localStorage.setItem('userRole', userRole);
    localStorage.setItem('userName', usuario);

    router.push("/principal");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      fazerLogin();
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
        onClick={fazerLogin}
      >
        Entrar
      </button>
    </div>
  );
}