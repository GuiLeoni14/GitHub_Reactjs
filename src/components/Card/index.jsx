import { AllRepositoryContext } from '../../context/RepoProvider/context';
import python_icon from '../../assets/img/icon-python.svg';
import { useContext } from 'react';
import P from 'prop-types';
import './styles.scss';
export default function Card({ index }) {
    const theContext = useContext(AllRepositoryContext);
    const {
        stateAllRepository: { all_repository },
        allRepositoryDispatch,
    } = theContext;
    const { language, title, description, created_at, updated_at } = all_repository[index];
    console.log(all_repository.language);
    return (
        <div className="card">
            <div className="language">
                <div className="img">
                    <img src={python_icon} alt="" />
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
