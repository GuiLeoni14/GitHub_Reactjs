import { useEffect, useState } from 'react';
import Container from '../../layout/Container';

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
        <Container>
            <h1>Home</h1>
            <input type="text" onChange={handleInput} />
            {repo && repo.map((repository, index) => <p key={index}>{repository.name}</p>)}
        </Container>
    );
}
