import React, {FC, useCallback} from "react";
import dropIcon from '../../images/drop-area-icon.svg';
import {useDrop} from "react-dnd";
import {addCalcPart, changePositionCalcElem} from "../../services/actions/calculator";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {IConstructorElement} from "../../utils/types";
import styles from './DragArea.module.css';
import DragAreaElement from "../DragAreaElement/DragAreaElement";

const DragArea: FC = () => {
    const dispatch = useAppDispatch();
    const constructor = useAppSelector(state => state.calculatorConstructor.constructor);

    const [{isOver}, dropTarget] = useDrop({
        accept: 'Component',
        drop(item: IConstructorElement) {
            dispatch({
                type: addCalcPart.type,
                payload: item
            });
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });


    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        dispatch({
            type: changePositionCalcElem.type,
            payload: {dragIndex, hoverIndex}
        })
    }, []);

    return (
        constructor.length > 0 ? (
            <div className={`flex flex-col space-y-3 ${isOver ? styles.dragHover : ''}`} ref={dropTarget}>
                {
                    constructor.map((item, index) => <DragAreaElement key={item.id} index={index} element={item.element}
                                                                      moveCard={moveCard} id={item.id}/>)
                }
            </div>
        ) : (
            <section
                className={`border-2 border-dashed border-borderDashedColor rounded-md flex items-center justify-center`}
                ref={dropTarget} style={{backgroundColor: isOver ? '#F0F9FF' : 'white'}}>
                <div className={`w-32 text-center`}>
                    <img src={dropIcon} alt='Перетащите сюда любой элемент из левой панели' className={`mb-3 mx-auto`}/>
                    <div className={`text-iris-100 text-sm mb-1`}>Перетащите сюда</div>
                    <div className={`text-gray-500 text-xs`}>любой элемент из левой панели</div>
                </div>
            </section>
        )
    );
}

export default DragArea;