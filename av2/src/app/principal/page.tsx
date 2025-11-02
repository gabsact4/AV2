'use client';

import Card from "./Card";
import Navbar from "./component/Navbar";
import Style from "./Menu.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Principal() {
  const [busca, setBusca] = useState("");

  const aeroNaves = [
    { id: 1, nome: "Avião", status: "não iniciado" },
    { id: 2, nome: "Helicóptero", status: "em andamento" },
    { id: 3, nome: "Jato", status: "concluído" }
  ];

  const aeroNavesFiltradas = aeroNaves.filter(nave =>
    nave.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className={Style.pagina}>
      <Navbar />


      <div className={Style.buscaContainer}>
        <input
          type="text"
          placeholder="Buscar aeronave..."
          className={Style.input}
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <div className={Style.conteudo}>
        <div className={Style.header}>
          <h1 className={Style.titulo}>Sistema de Gerenciamento de Aeronaves</h1>
          <p className={Style.subtitulo}>Gerencie suas aeronaves e peças</p>
        </div>

        <div className={Style.stats}>
          <div className={Style.statCard}>
            <h3>Total de Aeronaves</h3>
            <p className={Style.statNumber}>{aeroNaves.length}</p>
          </div>
          <div className={Style.statCard}>
            <h3>Com Peças Faltantes</h3>
            <p className={Style.statNumber}>2</p>
          </div>
          <div className={Style.statCard}>
            <h3>Prontas</h3>
            <p className={Style.statNumber}>1</p>
          </div>
        </div>

        <div className={Style.grid}>
          {aeroNavesFiltradas.length > 0 ? (
            aeroNavesFiltradas.map((nave) => (
              <Link
                key={nave.id}
                href={`/principal/${nave.id}`}
                className={Style["grid-item"]}
              >
                <Card 
                  titulo={nave.nome} 
                  status={nave.status}
                />
              </Link>
            ))
          ) : (
            <div className={Style.emptyState}>
              Nenhuma aeronave encontrada.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
