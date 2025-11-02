'use client';

import Navbar from "../component/Navbar";
import Card from "../Card";
import Style from "../Menu.module.css";
import StyleButton from "./AeroNave.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Detalhes() {
  const router = useRouter();
  const naveId = 1;
  const [userRole, setUserRole] = useState<string>('');

  useEffect(() => {
    const role = localStorage.getItem('userRole') || '';
    setUserRole(role);
  }, []);

  return (
    <div className={Style.pagina}>
      <Navbar />

      <div className={Style.conteudo}>
        <div className={StyleButton.page}>
          {/* Seleção de responsável */}
          <div
            style={{
              marginBottom: "20px",
              background: "white",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <label
              htmlFor="responsavel"
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
              }}
            >
              Selecione o Responsável:
            </label>
            <select
              id="responsavel"
              style={{
                width: "100%",
                padding: "10px",
                border: "2px solid #2db6c0",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              <option value="">Selecione um responsável</option>
              <option value="1">João Silva - Técnico</option>
              <option value="2">Maria Souza - Engenheira</option>
              <option value="3">Carlos Lima - Gerente</option>
            </select>

            <div
              style={{
                marginTop: "10px",
                padding: "10px",
                background: "#f0f9ff",
                borderRadius: "5px",
                border: "1px solid #2db6c0",
              }}
            >
              <strong>Responsável atual:</strong> João Silva - Técnico
            </div>
          </div>

          <div
            className={Style["grid-item"]}
            style={{ cursor: "default", marginBottom: "30px" }}
          >
            <Card titulo="Aeronave XP-01" status="Teste Elétrico" />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "15px",
              marginBottom: "30px",
            }}
          >
            <button 
              className={StyleButton.button} 
              onClick={() => router.push(`/principal/${naveId}/pecas`)}
            >
              Gerenciar Peças
            </button>
            
            {userRole === 'gerente' && (
              <button 
                className={StyleButton.button} 
                onClick={() => router.push(`/principal/${naveId}/teste`)}
              >
                Testes
              </button>
            )}
            
            {userRole === 'funcionario' && (
              <button className={StyleButton.button}>Avançar Etapa</button>
            )}
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              marginTop: "20px",
            }}
          >
            <h3 style={{ margin: "0 0 15px 0", color: "#333" }}>
              Informações da Aeronave
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "15px",
              }}
            >
              <div>
                <p>
                  <strong>ID:</strong> {naveId}
                </p>
                <p>
                  <strong>Status:</strong>
                  <span
                    style={{
                      color: "#ffc107",
                      fontWeight: "bold",
                      marginLeft: "8px",
                    }}
                  >
                    Teste Elétrico
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <strong>Etapa Atual:</strong> 2 de 5
                </p>
                <p>
                  <strong>Responsável:</strong> João Silva
                </p>
                <p>
                  <strong>Usuário Logado:</strong> {localStorage.getItem('userName')} ({userRole})
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}