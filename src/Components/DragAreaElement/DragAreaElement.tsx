import React, {createElement, FC, useRef, useState} from "react";
import {useDrag, useDrop} from "react-dnd";
import {IDragAreaElement, IDragItem, IXYCoord} from "../../utils/types";
import styles from './DragAreaElement.module.css';
import {useAppDispatch} from "../../hooks/hooks";
import {removeCalcPart} from "../../services/actions/calculator";

const DragAreaElement: FC<IDragAreaElement> = ({index, id, element, moveCard}) => {
    const sortingElement = useRef<HTMLDivElement>(null);
    const [direction, setDirection] = useState<string>('');
    const dispatch = useAppDispatch();

    const [{canDrop, isOver}, drop] = useDrop<IDragItem, void, any>({
        accept: 'sort',
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }),
        drop(item: IDragItem) {
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            moveCard(dragIndex, hoverIndex);
        },
        hover(item, monitor) {
            if (!sortingElement.current) {
                return;
            }

            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = sortingElement.current?.getBoundingClientRect()

            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            const clientOffset = monitor.getClientOffset()

            const hoverClientY = (clientOffset as IXYCoord).y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                setDirection('downward');
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                setDirection('upwards');
                return;
            }
        }
    })

    const [{isDragging}, drag] = useDrag({
        type: 'sort',
        item: () => {
            if (id === 'CalculatorResult') {
                return;
            } else {
                return {id, index}
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0.4 : 1;
    const hoverClass = isOver && canDrop ? direction === 'upwards' ? styles.hoverLineUp : styles.hoverLineDown : '';

    drag(drop(sortingElement));

    function handleDoubleClick(id: string) {
        dispatch({
            type: removeCalcPart.type,
            payload: id
        });
    }

    return (
        <div ref={sortingElement}
             style={{opacity}}
             className={`${hoverClass}`}
             onDoubleClick={() => handleDoubleClick(id)}
        >
            {createElement(element.type, element.props)}
        </div>
    );
}

export default DragAreaElement;