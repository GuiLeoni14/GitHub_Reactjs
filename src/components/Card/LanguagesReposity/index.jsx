import returnLanguageImage from '../actions';
import P from 'prop-types';
export default function LanguagesRepository({ languages }) {
    console.log(languages);
    return (
        <div className="all_languages">
            {languages &&
                languages.map((language, index) => (
                    <img key={index} src={returnLanguageImage(language.toLoweCase())} alt="" />
                ))}
        </div>
    );
}

LanguagesRepository.propTypes = {
    languages: P.node.isRequired,
};
