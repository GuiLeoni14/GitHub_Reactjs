import * as ScrollArea from '@radix-ui/react-scroll-area';
import P from 'prop-types';
import './styles.scss';
export default function DescriptionScroll({ description }) {
    return (
        <ScrollArea.Root className="scroll_area">
            <ScrollArea.Viewport className="scroll_view">
                <p id="description">{description}</p>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical" className="scroll_bar">
                <ScrollArea.Thumb className="scroll_thumb" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner />
        </ScrollArea.Root>
    );
}

DescriptionScroll.propTypes = {
    description: P.string.isRequired,
};
