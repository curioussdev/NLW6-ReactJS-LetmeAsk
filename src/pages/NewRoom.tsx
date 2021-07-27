import { Link } from 'react-router-dom';
import { FormEvent, useState} from 'react';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss'

export function NewRoom() {
 //   const {user} = useAuth()


 const [newRoom, setNewRoom] =  useState('');

 async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();


} ;


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
                 
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                      <input
                        type="text"
                        placeholder="Nome da sala"
                        onChange={event => setNewRoom(event.target.value)}
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