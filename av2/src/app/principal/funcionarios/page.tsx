'use client';

import Sidebar from "../component/Navbar";
import Style from "./Funcionario.module.css";
import { useEffect, useState } from "react";

export default function Funcionario() {
  const [userRole, setUserRole] = useState<string>('');
  const [busca, setBusca] = useState('');
  const [showModal, setShowModal] = useState(false); // controla se o modal está aberto
  const [novoFuncionario, setNovoFuncionario] = useState({
    nome: "",
    cargo: "",
    usuario: "",
    status: "Em Andamento",
  });

  const [funcionarios, setFuncionarios] = useState([
    { id: 1, nome: "João Silva", cargo: "Técnico", usuario: "joaos", status: "Em Andamento" },
    { id: 2, nome: "Maria Souza", cargo: "Engenheira", usuario: "marias", status: "Concluído" },
    { id: 3, nome: "Carlos Lima", cargo: "Analista", usuario: "carlosl", status: "Em Andamento" },
  ]);

  useEffect(() => {
    const role = localStorage.getItem('userRole') || '';
    setUserRole(role);
  }, []);

  const funcionariosFiltrados = funcionarios.filter((f) =>
    f.nome.toLowerCase().includes(busca.toLowerCase()) ||
    f.cargo.toLowerCase().includes(busca.toLowerCase()) ||
    f.usuario.toLowerCase().includes(busca.toLowerCase())
  );

  // Função chamada ao clicar em "Cadastrar Funcionário"
  const handleCadastrar = () => {
    console.log("Novo Funcionário:", novoFuncionario);
    setShowModal(false); // fecha o modal
    setNovoFuncionario({ nome: "", cargo: "", usuario: "", status: "Em Andamento" }); // limpa o formulário
  };

  return (
    <div className={Style.pagina}>
      <Sidebar />

      <div className={Style.conteudo}>
        <div className={Style.header}>
          <input
            className={Style.input}
            type="text"
            placeholder="Buscar funcionário, cargo ou usuário..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

          {userRole === 'administrador' && (
            <button className={Style.addButton} onClick={() => setShowModal(true)}>
              <span>+</span>
              Cadastrar Funcionário
            </button>
          )}
        </div>

        <div className={Style.tabelaContainer}>
          {funcionariosFiltrados.length > 0 ? (
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
                {funcionariosFiltrados.map((f) => (
                  <tr key={f.id}>
                    <td>{f.id}</td>
                    <td>{f.nome}</td>
                    <td>{f.cargo}</td>
                    <td>{f.usuario}</td>
                    <td>
                      <span
                        className={`${Style.status} ${
                          f.status === "Concluído"
                            ? Style.statusConcluido
                            : Style.statusAndamento
                        }`}
                      >
                        {f.status}
                      </span>
                    </td>
                    {userRole === 'administrador' && (
                      <td>
                        <div className={Style.acoes}>
                          <button className={`${Style.acaoButton} ${Style.editar}`}>Editar</button>
                          <button className={`${Style.acaoButton} ${Style.excluir}`}>Excluir</button>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className={Style.semResultados}>Nenhum funcionário encontrado.</div>
          )}
        </div>
      </div>

      {/* Modal de cadastro */}
      {showModal && (
        <div className={Style.modalOverlay}>
          <div className={Style.modal}>
            <h2>Cadastrar Funcionário</h2>

            <label>Nome:</label>
            <input
              type="text"
              value={novoFuncionario.nome}
              onChange={(e) => setNovoFuncionario({ ...novoFuncionario, nome: e.target.value })}
              placeholder="Digite o nome"
            />

            <label>Cargo:</label>
            <input
              type="text"
              value={novoFuncionario.cargo}
              onChange={(e) => setNovoFuncionario({ ...novoFuncionario, cargo: e.target.value })}
              placeholder="Digite o cargo"
            />

            <label>Usuário:</label>
            <input
              type="text"
              value={novoFuncionario.usuario}
              onChange={(e) => setNovoFuncionario({ ...novoFuncionario, usuario: e.target.value })}
              placeholder="Digite o usuário"
            />

            <label>Status:</label>
            <select
              value={novoFuncionario.status}
              onChange={(e) => setNovoFuncionario({ ...novoFuncionario, status: e.target.value })}
            >
              <option value="Em Andamento">Em Andamento</option>
              <option value="Concluído">Concluído</option>
            </select>

            <div className={Style.modalButtons}>
              <button onClick={handleCadastrar} className={Style.salvar}>
                Salvar
              </button>
              <button onClick={() => setShowModal(false)} className={Style.cancelar}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
