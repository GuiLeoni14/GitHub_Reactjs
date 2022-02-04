import { useContext, useEffect, useState } from 'react';
import Container from '../../layout/Container';
import AllRepositoryProvider from '../../context/RepositoryProvider';
import './styles.scss';
import CardsRepository from './CardsRepository';
export default function Home() {
    return (
        <section className="s-home">
            <Container>
                <AllRepositoryProvider>
                    <h1>Home</h1>
                    <CardsRepository />
                </AllRepositoryProvider>
            </Container>
        </section>
    );
}
