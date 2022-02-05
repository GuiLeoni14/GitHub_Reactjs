import { AllRepositoryContext } from '../../context/RepositoryProvider/context';
import { useContext } from 'react';
import P from 'prop-types';
import './styles.scss';
import returnLanguageImage from './actions';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import DescriptionScroll from './DescriptionScroll';
export default function Card({ index }) {
    const theContext = useContext(AllRepositoryContext);
    const {
        stateAllRepository: { all_repository },
        allRepositoryDispatch,
    } = theContext;
    const { language, name, description, created_at, updated_at } = all_repository[index];
    return (
        <div className="card">
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
                        Criado:<span>{created_at}</span>
                    </h6>
                    <h6 id="edited">
                        Editado:<span>{updated_at}</span>
                    </h6>
                </div>
                <DescriptionScroll description={description} />
            </div>
        </div>
    );
}

Card.propTypes = {
    index: P.number,
};
