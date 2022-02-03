import { useEffect, useState } from 'react';
import Container from '../../layout/Container';
import CardRepo from './CardRepo';
import './styles.scss';
export default function Home() {
    const [repo, setRep] = useState([]);
    const [input, setInput] = useState('');
    console.log(repo);
    useEffect(() => {
        fetch('https://api.github.com/users/GuiLeoni14/repos')
            .then((resp) => resp.json())
            .then((data) => setRep(data))
            .catch((err) => console.log(err));
    }, []);
    const handleInput = (e) => {
        setInput(e.target.value);
    };
    return (
        <section className="s-home">
            <Container>
                <h1>Home</h1>
                <input type="text" onChange={handleInput} />
                <div className="cards-repository">
                    {repo &&
                        repo.map((repository, index) => (
                            <CardRepo
                                key={index}
                                title={repository.name}
                                description={repository.description}
                                language={repository.language}
                                created={repository.created_at}
                                updated={repository.updated_at}
                            />
                        ))}
                </div>
            </Container>
        </section>
    );
}
