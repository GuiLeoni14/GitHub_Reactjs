import { AllRepositoryContext } from '../../context/RepositoryProvider/context';
import { useContext } from 'react';
import P from 'prop-types';
import './styles.scss';
import returnLanguageImage from './actions';
export default function Card({ index }) {
    const theContext = useContext(AllRepositoryContext);
    const {
        stateAllRepository: { all_repository },
        allRepositoryDispatch,
    } = theContext;
    const { language, title, description, created_at, updated_at } = all_repository[index];
    return (
        <div className="card">
            <div className="language">
                <div className={`img ${language?.toLowerCase()}`}>
                    <img src={returnLanguageImage(language)} alt="" />
                </div>
                <h4>{language}</h4>
            </div>
            <div className="text">
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="info">
                    <span>{created_at}</span>
                    <span>{updated_at}</span>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    index: P.number,
};
