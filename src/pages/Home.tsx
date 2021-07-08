import illustrationImg from '../assets/images/illustration.svg';


export function Home() {
    return(
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie Salas de Q&amp;A ao Vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real!</p>
            </aside>
        </div>
    );
};