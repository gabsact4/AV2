'use client';
import Style from "./Aeronave.module.css";
import Sidebar from "../component/Navbar";
import { useState } from "react";

export default function CadastroAeronave() {
  const [aeronave, setAeronave] = useState({
    nome: "",
    tipo: "comercial",
    capacidade: 0,
    alcance: 0,
  });

  return (
    <div className={Style.container}>
      <Sidebar />

      <div className={Style.content}>
        <h1 className={Style.title}>Cadastro de Aeronave</h1>

        <form className={Style.form}>
          <div className={Style.formGroup}>
            <label htmlFor="nome">Nome da Aeronave *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome do Projeto"
              value={aeronave.nome}
              required
              onChange={(e) =>
                setAeronave({ ...aeronave, nome: e.target.value })
              }
            />
          </div>

          <div className={Style.formGroup}>
            <label htmlFor="tipo">Tipo</label>
            <select
              id="tipo"
              name="tipo"
              value={aeronave.tipo}
              onChange={(e) =>
                setAeronave({ ...aeronave, tipo: e.target.value })
              }
            >
              <option value="comercial">Comercial</option>
              <option value="militar">Militar</option>
            </select>
          </div>

          <div className={Style.formRow}>
            <div className={Style.formGroup}>
              <label htmlFor="capacidade">Capacidade</label>
              <input
                type="number"
                id="capacidade"
                name="capacidade"
                min="0"
                placeholder="0"
                value={aeronave.capacidade}
                onChange={(e) =>
                  setAeronave({
                    ...aeronave,
                    capacidade: Number(e.target.value),
                  })
                }
              />
            </div>

            <div className={Style.formGroup}>
              <label htmlFor="alcance">Alcance (km)</label>
              <input
                type="number"
                id="alcance"
                name="alcance"
                min="0"
                placeholder="0"
                value={aeronave.alcance}
                onChange={(e) =>
                  setAeronave({
                    ...aeronave,
                    alcance: Number(e.target.value),
                  })
                }
              />
            </div>
          </div>

          <button
            type="button"
            className={Style.submitButton}
            onClick={() => console.log(aeronave)}
          >
            Cadastrar Aeronave
          </button>
        </form>
      </div>
    </div>
  );
}
