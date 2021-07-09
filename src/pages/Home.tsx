import {useHistory} from 'react-router-dom';

import {auth, firebase } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';


import { Button } from '../components/Button';



import '../styles/auth.scss'

export function Home() {

    const history = useHistory();

    function signIn() {

    }

    function handleCreateRoom() { // usando o hook useHistorry do react-router-dom, navegamos entre as páginas
        
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => { // abre o POPUP para iniciar com a conta google
            console.log(result)

            history.push('/rooms/new');
        });
        
        
        
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie Salas de Q&amp;A ao Vivo!</strong>
                <p>Tire as dúvidas da sua audiência em tempo real.</p>
            </aside>
            <main>
            <div className="main-content">
                <img src={logoImg} alt="Letmeask" />
                  <button onClick={handleCreateRoom} className="create-room-google">
                    <img src={googleIconImg} alt="Logo do google" />
                    Crie sua sala com o google
                    </button>
                    <button className="create-room-facebook">
                    Crie sua sala com o facebook
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form>
                      <input
                        type="text"
                        placeholder="Digite o código da sala"
                        />
                    <Button type="submit">
                      Entrar na Sala
                    </Button>
                    </form>
                    
                </div>
            </main>
        </div>
    );
};