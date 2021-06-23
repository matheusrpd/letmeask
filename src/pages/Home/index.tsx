import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';
import googleIconImg from '../../assets/google-icon.svg';

import './styles.scss';
import { Button } from '../../components/Button';
import { useAuth } from '../../contexts/AuthContext';
import { database } from '../../services/firebase';

export function Home() {
  const history = useHistory();
  const [roomCode, setRoomCode] = useState('');
  const { user, signInWithGoogle } = useAuth();

  async function handleSignIn() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists.');
      return;
    }

    history.push(`rooms/${roomCode}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbiolizando perguntes e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo.</strong>
        <span>Tire as dúvidas da sua audiência em tempo real</span>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button
            type="button"
            className="create-room"
            onClick={handleSignIn}
          >
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre em uma sala</div>

          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}