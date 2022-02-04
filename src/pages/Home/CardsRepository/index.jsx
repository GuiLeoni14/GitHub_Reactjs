import P from 'prop-types';
import './styles.scss';
import { memo, useContext, useEffect } from 'react';
import python_icon from '../../../assets/img/icon-python.svg';
import RepoProvider from '../../../context/RepoProvider';
import { AllRepositoryContext } from '../../../context/RepoProvider/context';
import { loadAllRepository } from '../../../context/RepoProvider/action';
import Card from '../../../components/Card';
function CardsRepository() {
    const theContext = useContext(AllRepositoryContext);
    const { stateAllRepository, allRepositoryDispatch } = theContext;
    useEffect(() => {
        loadAllRepository(allRepositoryDispatch, 'GuiLeoni14').then((dispatch) => {
            dispatch();
        });
    }, [allRepositoryDispatch]);
    console.log(theContext);
    return (
        <div className="cards_repository">
            {stateAllRepository.all_repository.map((repo, index) => (
                <Card key={index} index={index} />
            ))}
        </div>
    );
}
export default memo(CardsRepository);
CardsRepository.propTypes = {
    title: P.string,
    language: P.string,
    description: P.string,
    created: P.string,
    updated: P.string,
};
