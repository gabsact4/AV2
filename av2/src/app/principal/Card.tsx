import Style from "./Card.module.css";

type CardProps = {
  titulo: string;
  status: string;
  pecasFaltantes?: number;
};

export default function Card({ titulo, status, pecasFaltantes = 0 }: CardProps) {
  return (
    <div className={Style.card}>
      <h2 className={Style.titulo}>{titulo}</h2>
      <div className={Style.info}>
        <span className={`${Style.status} ${getStatusClass(status)}`}>
          {status}
        </span>
        {pecasFaltantes > 0 && (
          <span className={Style.pecasFaltantes}>
            Faltam {pecasFaltantes} peças
          </span>
        )}
      </div>
    </div>
  );
}

function getStatusClass(status: string) {
  switch (status.toLowerCase()) {
    case "concluido":
      return Style.concluido;
    case "em andamento":
      return Style.emAndamento;
    case "nao iniciado":
      return Style.naoIniciado;
    default:
      return Style.desconhecido;
  }
}
