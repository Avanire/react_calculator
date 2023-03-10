import React, {FC} from "react";
import dropIcon from '../../images/drop-area-icon.svg';
import {useDrop} from "react-dnd";
import {addCalcPart} from "../../services/actions/calculator";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import {serialize, deserialize} from 'react-serialize';

const DragArea: FC = () => {
    const dispatch = useAppDispatch();
    const constructor = useAppSelector(state => state.calculatorConstructor.constructor);

    const [, drop] = useDrop({
        accept: 'Component',
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }),
        drop(item) {
            dispatch({
                type: addCalcPart.type,
                payload: serialize(item)
            });
        }
    });

    return (
        constructor.length > 0 ? (
            <div className={`flex flex-col space-y-3`} ref={drop}>

            </div>
        ) : (
            <section className={`border-2 border-dashed border-borderDashedColor rounded-md flex items-center justify-center`} ref={drop} /*style={{ backgroundColor: isOver ? '#F0F9FF' : 'white' }}*/>
                <div className={`w-32 text-center`}>
                    <img src={dropIcon} alt='Перетащите сюда любой элемент из левой панели' className={`mb-3 mx-auto`} />
                    <div className={`text-iris-100 text-sm mb-1`}>Перетащите сюда</div>
                    <div className={`text-gray-500 text-xs`}>любой элемент из левой панели</div>
                </div>
            </section>
        )
    );
}

export default DragArea;