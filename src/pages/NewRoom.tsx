import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import {useContext} from 'react';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';


import { Button } from '../components/Button';


import '../styles/auth.scss'

export function NewRoom() {
    const {user} = useContext(AuthContext)

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Tem dúsvida e quer várias opiniões diferentes?</strong>
                <p>Tire as dúvidas da sua audiência em tempo real.</p>
            </aside>
            <main>
             <div className="main-content">
                <img src={logoImg} alt="Letmeask" />
                 <h1>{user?.name}</h1>
                    <h2>Criar uma nova sala</h2>
                    <form>
                      <input
                        type="text"
                        placeholder="Nome da sala"
                        />
                    <Button type="submit">
                      Criar sala
                    </Button>
                    </form>
                    <p>Quer entrar em uma sala existem? <Link to="/">Clique aqui.</Link> </p>
                </div>
            </main>
        </div>
    );
};