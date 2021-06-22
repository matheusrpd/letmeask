import { Link } from 'react-router-dom';

import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';

import './styles.scss';
import { Button } from '../../components/Button';

export function NewRoom() {
  return (
    <div id="page-newRoom">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbiolizando perguntes e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo.</strong>
        <span>Tire as dúvidas da sua audiência em tempo real</span>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Crie uma nova sala</h2>
          <form action="">
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>Deseja entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>
  );
}