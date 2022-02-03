import P from 'prop-types';
import './styles.scss';
export default function CardRepo({ language, description, created, updated }) {
    return (
        <div className="card">
            <div className="language">
                <img src="" alt="" />
            </div>
            <div className="text">
                <h4>{language}</h4>
                <p>{description}</p>
            </div>
            <div className="info">
                <span>{created}</span>
                <span>{updated}</span>
            </div>
        </div>
    );
}

CardRepo.propTypes = {
    language: P.string,
    description: P.string,
    created: P.string,
    updated: P.string,
};
