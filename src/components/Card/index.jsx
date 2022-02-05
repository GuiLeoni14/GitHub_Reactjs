import { AllRepositoryContext } from '../../context/RepositoryProvider/context';
import { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import P from 'prop-types';
import './styles.scss';
import returnLanguageImage from './actions';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import DescriptionScroll from './DescriptionScroll';
import LanguagesRepository from './LanguagesReposity';
export default function Card({ index }) {
    const theContext = useContext(AllRepositoryContext);
    const [allLanguages, setAllLanguages] = useState([]);
    const {
        stateAllRepository: { all_repository },
        allRepositoryDispatch,
    } = theContext;
    const { language, name, description, created_at, updated_at, languages_url } = all_repository[index];
    useEffect(() => {
        console.log(languages_url);
        fetch(languages_url, {
            headers: {
                Authorization: import.meta.env.VITE_REACT_APP_TOKEN,
            },
        })
            .then((resp) => resp.json())
            .then((data) => setAllLanguages(data))
            .catch((err) => console.log(err));
    }, [languages_url]);
    console.log(allLanguages.length);
    return (
        <div className="card">
            {allLanguages.length > 0 && (
                <>
                    <div className="language">
                        <div className={`img ${language?.toLowerCase()}`}>
                            <img src={returnLanguageImage(language)} alt="" />
                        </div>
                        <h4>{language}</h4>
                    </div>
                    <div className="text">
                        <h6>{name}</h6>
                        <div className="info">
                            <h6 id="created">
                                Criado:<span>{moment(created_at).format('DD/MM/YYYY hh:mm:ss')}</span>
                            </h6>
                            <h6 id="edited">
                                Editado:<span>{moment(updated_at).format('DD/MM/YYYY hh:mm:ss')}</span>
                            </h6>
                        </div>
                        <DescriptionScroll description={description} />
                        <LanguagesRepository languages={language} />
                    </div>
                </>
            )}
        </div>
    );
}

Card.propTypes = {
    index: P.number,
};
