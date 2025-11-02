'use client';

import Sidebar from "../component/Navbar";
import Style from "./Funcionario.module.css";
import { useEffect, useState } from "react";

export default function Funcionario() {
  const [userRole, setUserRole] = useState<string>('');

  useEffect(() => {
    const role = localStorage.getItem('userRole') || '';
    setUserRole(role);
  }, []);

  return (
    <div className={Style.pagina}>
      <Sidebar />
      
      <div className={Style.conteudo}>
        <div className={Style.header}>
          <input
            className={Style.input}
            type="text"
            placeholder="Buscar funcionário, cargo ou usuário..."
          />
          
          {userRole === 'administrador' && (
            <button className={Style.addButton}>
              <span>+</span>
              Cadastrar Funcionário
            </button>
          )}
        </div>

        <div className={Style.tabelaContainer}>
          <table className={Style.tabela}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Cargo</th>
                <th>Usuário</th>
                <th>Status do Serviço</th>
                {userRole === 'administrador' && <th>Ações</th>}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>João Silva</td>
                <td>Técnico</td>
                <td>joaos</td>
                <td>
                  <span className={`${Style.status} ${Style.statusAndamento}`}>
                    Em Andamento
                  </span>
                </td>
                {userRole === 'administrador' && (
                  <td>
                    <div className={Style.acoes}>
                      <button className={`${Style.acaoButton} ${Style.editar}`}>
                        Editar
                      </button>
                      <button className={`${Style.acaoButton} ${Style.excluir}`}>
                        Excluir
                      </button>
                    </div>
                  </td>
                )}
              </tr>

              <tr>
                <td>2</td>
                <td>Maria Souza</td>
                <td>Engenheira</td>
                <td>marias</td>
                <td>
                  <span className={`${Style.status} ${Style.statusConcluido}`}>
                    Concluído
                  </span>
                </td>
                {userRole === 'administrador' && (
                  <td>
                    <div className={Style.acoes}>
                      <button className={`${Style.acaoButton} ${Style.editar}`}>
                        Editar
                      </button>
                      <button className={`${Style.acaoButton} ${Style.excluir}`}>
                        Excluir
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </div>

        <div className={Style.semResultados}>
          Nenhum funcionário encontrado.
        </div>
      </div>
    </div>
  );
}