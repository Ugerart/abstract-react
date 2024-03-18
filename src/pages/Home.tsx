import Section from "../components/Section/Section";

const Home = () => {
    return (
        <>
            <Section title="Progetto React (TS) Test" type="black">
                <p>
                    Questo è un progetto di test creato in React e TypeScript.
                </p>
            </Section>
            <Section title="Funzionalità">
                <ul className="p-list">
                    <li>
                        <p>
                            SPA (Single Page Application) in React utilizzando TypeScript.
                        </p>
                    </li>
                    <li>
                        <p>
                            Utilizzo dei moduli aggiuntivi preferiti.
                        </p>
                    </li>
                    <li>
                        <p>
                            Routing implementato con React Router.
                        </p>
                    </li>
                    <li>
                        <p>
                            Header sticky per una navigazione facile e accessibile.
                        </p>
                    </li>
                    <li>
                        <p>
                            Footer ancorato alla parte inferiore della pagina se il contenuto è più corto dell'altezza della pagina.
                        </p>
                    </li>
                    <li>
                        <p>
                            Pagina responsive per una visualizzazione ottimale su diverse dimensioni di schermo.
                        </p>
                    </li>
                    <li>
                        <p>
                            Caricamento dei dati della pagina "sunglasses" dall'endpoint <a href="https://assets.fc-dev.instore.oakley.com/assets/products/products.json">products.json</a>.
                        </p>
                    </li>
                    <li>
                        <p>
                            Utilizzo del font Roboto di Google in tutto il progetto.
                        </p>
                    </li>
                    <li>
                        <p>
                            Form di ricerca e form di iscrizione "finti" senza logica specifica.
                        </p>
                    </li>
                </ul>
            </Section>
            <Section title="Tecnologie Utilizzate" type="black">
                <ul className="p-list">
                    <li>
                        <p>
                            React
                        </p>
                    </li>
                    <li>
                        <p>
                            TypeScript
                        </p>
                    </li>
                    <li>
                        <p>
                            React Router
                        </p>
                    </li>
                    <li>
                        <p>
                            Sass
                        </p>
                    </li>
                </ul>
            </Section>
        </>
    )
}

export default Home;