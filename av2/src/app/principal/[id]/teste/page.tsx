'use client';

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Navbar from "../../component/Navbar";
import Style from "./Testes.module.css";

export default function TestesAeronavePage() {
  const router = useRouter();
  const params = useParams();
  const idNave = params?.id;
  const [testeAtivo, setTesteAtivo] = useState<null | string>(null);
  const [userRole, setUserRole] = useState<string>('');

  useEffect(() => {
    const role = localStorage.getItem('userRole') || '';
    setUserRole(role);
  }, []);

  const abrirTeste = (nomeTeste: string) => {
      setTesteAtivo(nomeTeste);
  };
  const fecharTeste = () => {
    setTesteAtivo(null);
  };

  return (
    <div className={Style.pagina}>
      <Navbar />

      <div className={Style.conteudo}>
        <div className={Style.header}>
          <button 
            className={Style.botaoVoltar} 
            onClick={() => router.push(`/principal/${idNave}`)}
          >
            ← Voltar
          </button>
          <h1 className={Style.titulo}>Testes: Aeronave XP-01</h1>
          <p className={Style.subtitulo}>Modelo experimental de aeronave elétrica</p>
        </div>

        <div className={Style.progressoGeral}>
          <h3>Progresso: 65%</h3>
          <div className={Style.barraProgresso}>
            <div className={Style.progressoPreenchimento} style={{ width: "65%" }}></div>
          </div>
        </div>

        <div className={Style.etapas}>
          <div className={Style.etapa}>
            <h3>Teste Elétrico</h3>
            <div className={Style.testes}>
              <div className={Style.teste}>
                <h4>Sistema de Energia</h4>
                <p>Status: Pendente</p>
                <button
                  className={Style.botaoIniciar}
                  onClick={() => abrirTeste("Sistema de Energia")}
                >
                  Iniciar Teste
                </button>
              </div>
            </div>
          </div>

          <div className={Style.etapa}>
            <h3>Teste Mecânico</h3>
            <div className={Style.testes}>
              <div className={Style.teste}>
                <h4>Sistema de Propulsão</h4>
                <p>Status: Concluído</p>
              </div>
            </div>
          </div>

          <div className={Style.etapa}>
            <h3>Teste Final</h3>
            <div className={Style.testes}>
              <div className={Style.teste}>
                <h4>Teste de Integração</h4>
                <p>Status: Pendente</p>
                <button
                  className={Style.botaoIniciar}
                  onClick={() => abrirTeste("Teste de Integração")}
                >
                  Iniciar Teste
                </button>
              </div>
            </div>
          </div>
        </div>

        {testeAtivo && (
          <div className={Style.modalOverlay}>
            <div className={Style.modal}>
              <h2>{testeAtivo}</h2>

              <div className={Style.criterios}>
                <h4>Critérios:</h4>
                <label className={Style.criterioItem}>
                  <input type="checkbox" />
                  <span>Verificar tensão da bateria (12V - 24V)</span>
                </label>
                <label className={Style.criterioItem}>
                  <input type="checkbox" />
                  <span>Testar sistema de carregamento</span>
                </label>
              </div>

              <div className={Style.formTeste}>
                <input
                  type="text"
                  placeholder="Responsável"
                  className={Style.input}
                />
                <textarea
                  placeholder="Observações"
                  className={Style.textarea}
                  rows={3}
                />
              </div>

              <div className={Style.acoesModal}>
                <button className={Style.botaoConcluir}>Concluir</button>
                <button className={Style.botaoCancelar} onClick={fecharTeste}>
                  Sair
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}