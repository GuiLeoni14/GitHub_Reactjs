import P from 'prop-types';
import './styles.scss';
import { memo } from 'react';
import python_icon from '../../../assets/img/icon-python.svg';
function CardRepo({ title, language, description, created, updated }) {
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
                    <span>{created}</span>
                    <span>{updated}</span>
                </div>
            </div>
        </div>
    );
}
export default memo(CardRepo);
CardRepo.propTypes = {
    title: P.string,
    language: P.string,
    description: P.string,
    created: P.string,
    updated: P.string,
};
