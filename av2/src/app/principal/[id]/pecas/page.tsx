"use client";

import Navbar from "../../component/Navbar";
import Style from "./Pecas.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Peca {
  id: number;
  nome: string;
  quantidadeTotal: number;
  quantidadeInstalada: number;
  categoria: string;
  localizacao: string;
  status: "Completo" | "Faltante";
}

export default function PecasAeronavePage() {
  const router = useRouter();
  const [userRole, setUserRole] = useState<string>("");
  const [busca, setBusca] = useState("");

  const [pecas, setPecas] = useState<Peca[]>([
    {
      id: 1,
      nome: "Motor Principal",
      quantidadeTotal: 1,
      quantidadeInstalada: 1,
      categoria: "Mecânica",
      localizacao: "Hangar",
      status: "Completo",
    },
    {
      id: 2,
      nome: "Sensor de Altitude",
      quantidadeTotal: 2,
      quantidadeInstalada: 0,
      categoria: "Elétrica",
      localizacao: "Almoxarifado",
      status: "Faltante",
    },
    {
      id: 3,
      nome: "Hélice",
      quantidadeTotal: 2,
      quantidadeInstalada: 1,
      categoria: "Mecânica",
      localizacao: "Oficina",
      status: "Faltante",
    },
  ]);

  useEffect(() => {
    const role = localStorage.getItem("userRole") || "";
    setUserRole(role);
  }, []);

  const pecasFiltradas = pecas.filter(
    (p) =>
      p.nome.toLowerCase().includes(busca.toLowerCase()) ||
      p.categoria.toLowerCase().includes(busca.toLowerCase()) ||
      p.localizacao.toLowerCase().includes(busca.toLowerCase())
  );

  const marcarInstalada = (id: number) => {
    setPecas((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              quantidadeInstalada: p.quantidadeTotal,
              status: "Completo",
            }
          : p
      )
    );
  };

  const removerPeca = (id: number) => {
    setPecas((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className={Style.pagina}>
      <Navbar />

      <div className={Style.botoesTopo}>
        {userRole === "gerente" && (
          <button
            className={Style.botaoTeste}
            onClick={() => router.push("/principal/1/teste")}
          >
            Ir para Testes
          </button>
        )}
        <button className={Style.botaoRelatorio}>Relatório</button>
      </div>

      <div className={Style.conteudo}>
        <div className={Style.header}>
          <button className={Style.botaoVoltar} onClick={() => router.back()}>
            ← Voltar
          </button>
          <h1 className={Style.titulo}>Peças da Aeronave: XP-01</h1>
        </div>

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

        <div className={Style.buscaContainer}>
          <input
            type="text"
            placeholder="Buscar peças..."
            className={Style.inputBusca}
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        <div className={Style.listaPecas}>
          <h2>Peças da Aeronave ({pecasFiltradas.length})</h2>
          <div className={Style.gridPecas}>
            {pecasFiltradas.map((p) => (
              <div
                key={p.id}
                className={`${Style.cardPeca} ${p.status === "Completo" ? Style.completa : Style.faltante}`}
              >
                <h3>{p.nome}</h3>
                <div className={Style.infoPeca}>
                  <p><strong>Categoria:</strong> {p.categoria}</p>
                  <p><strong>Localização:</strong> {p.localizacao}</p>
                  <p>
                    <strong>Quantidade:</strong> {p.quantidadeInstalada} / {p.quantidadeTotal}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span
                      className={`${Style.status} ${
                        p.status === "Completo" ? Style.statusCompleto : Style.statusFaltante
                      }`}
                    >
                      {p.status}
                    </span>
                  </p>
                </div>
                {userRole === "administrador" || userRole === "Tecnico" ? (
                  <div className={Style.acoes}>
                    <button className={Style.botaoInstalar} onClick={() => marcarInstalada(p.id)}>
                      Marcar como Instalada
                    </button>
                    <button className={Style.botaoRemover} onClick={() => removerPeca(p.id)}>
                      Remover
                    </button>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
