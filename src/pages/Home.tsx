import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export function Home() {
    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie Salas de Q&amp;A ao Vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real!</p>
            </aside>
            <main>
              <div>
                <img src={logoImg} alt="Letmeask" />
                  <button>
                    <img src={googleIconImg} alt="Logo do google" />
                    Crie sua sala com o google
                    </button>
                    <div>Ou entre em uma sala</div>
                    <form>
                      <input
                        type="text"
                        placeholder="Digite o código da sala"
                        />
                    </form>
                    <button type="submit">
                      Entrar na Sala
                    </button>
                </div>
            </main>
        </div>
    );
};