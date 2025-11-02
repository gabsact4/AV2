'use client';
import Style from "./Aeronave.module.css";
import Sidebar from "../component/Navbar";

export default function CadastroAeronave() {
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
              required
            />
          </div>

          <div className={Style.formGroup}>
            <label htmlFor="tipo">Tipo *</label>
            <input
              type="text"
              id="tipo"
              name="tipo"
              placeholder="Ex: Comercial, Carga, Executivo"
              required
            />
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
              />
            </div>
          </div>

          <button type="button" className={Style.submitButton}>
            Cadastrar Aeronave
          </button>
        </form>
      </div>
    </div>
  );
}
