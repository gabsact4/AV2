"use client";

import Navbar from "../../component/Navbar";
import Style from "./Pecas.module.css";
import { useRouter } from "next/navigation";

export default function PecasAeronavePage() {
  const router = useRouter();

  return (
    <div className={Style.pagina}>
      <Navbar />

      {/* Botões fixos no topo */}
      <div className={Style.botoesTopo}>
        <button 
          className={Style.botaoTeste} 
          onClick={() => router.push("/principal/${nave.id}")} // navegar para a página de teste
        >
          Ir para Testes
        </button>
        <button className={Style.botaoRelatorio}>Relatório</button>
      </div>

      <div className={Style.conteudo}>
        <div className={Style.header}>
          <button 
            className={Style.botaoVoltar} 
            onClick={() => router.back()} // voltar para a página anterior
          >
            ← Voltar
          </button>
          <h1 className={Style.titulo}>Peças da Aeronave: XP-01</h1>
        </div>

        {/* Estatísticas */}
        <div className={Style.stats}>
          <div className={Style.statCard}>
            <h3>Total de Peças</h3>
            <p className={Style.statNumber}>10</p>
          </div>
          <div className={Style.statCard}>
            <h3>Peças Faltantes</h3>
            <p className={Style.statNumber}>3</p>
          </div>
          <div className={Style.statCard}>
            <h3>Peças Completas</h3>
            <p className={Style.statNumber}>7</p>
          </div>
        </div>

        {/* Formulário visual */}
        <div className={Style.formContainer}>
          <h2>Adicionar Nova Peça</h2>
          <div className={Style.form}>
            <input type="text" placeholder="Nome da peça" className={Style.input} />
            <input type="number" placeholder="Quantidade necessária" className={Style.input} min="1" />
            <input type="text" placeholder="Categoria" className={Style.input} />
            <select className={Style.input}>
              <option value="Almoxarifado">Almoxarifado</option>
              <option value="Oficina">Oficina</option>
              <option value="Hangar">Hangar</option>
              <option value="Externo">Externo</option>
            </select>
            <div className={Style.checkboxGroup}>
              <label><input type="checkbox" /> Peça Necessária</label>
              <label><input type="checkbox" /> Já Instalada</label>
            </div>
            <button className={Style.botaoAdicionar}>Adicionar Peça</button>
          </div>
        </div>

        {/* Busca */}
        <div className={Style.buscaContainer}>
          <input type="text" placeholder="Buscar peças..." className={Style.inputBusca} />
        </div>

        {/* Lista de peças */}
        <div className={Style.listaPecas}>
          <h2>Peças da Aeronave (3)</h2>
          <div className={Style.gridPecas}>
            <div className={`${Style.cardPeca} ${Style.completa}`}>
              <h3>Motor Principal</h3>
              <div className={Style.infoPeca}>
                <p><strong>Categoria:</strong> Mecânica</p>
                <p><strong>Localização:</strong> Hangar</p>
                <p><strong>Quantidade:</strong> 1 / 1</p>
                <p><strong>Status:</strong> <span className={`${Style.status} ${Style.statusCompleto}`}>Completo</span></p>
              </div>
              <div className={Style.acoes}>
                <button className={Style.botaoInstalar}>Marcar como Instalada</button>
                <button className={Style.botaoRemover}>Remover</button>
              </div>
            </div>

            <div className={`${Style.cardPeca} ${Style.faltante}`}>
              <h3>Sensor de Altitude</h3>
              <div className={Style.infoPeca}>
                <p><strong>Categoria:</strong> Elétrica</p>
                <p><strong>Localização:</strong> Almoxarifado</p>
                <p><strong>Quantidade:</strong> 0 / 2</p>
                <p><strong>Status:</strong> <span className={`${Style.status} ${Style.statusFaltante}`}>Faltante</span></p>
              </div>
              <div className={Style.acoes}>
                <button className={Style.botaoInstalar}>Marcar como Instalada</button>
                <button className={Style.botaoRemover}>Remover</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
