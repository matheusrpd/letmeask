import logoImg from '../../assets/logo.svg';
import { Button } from '../../components/Button';

import './styles.scss';

export function Room() {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>código</div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala react</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea
            placeholder="O que você quer perguntar?"
          />

          <div className="form-footer">
            <span>Para fazer uma pergunta, <button>faça seu login</button>.</span>
            <Button type="submit">
              Enviar pergunta
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}