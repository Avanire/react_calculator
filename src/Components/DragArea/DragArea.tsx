import React, {FC} from "react";
import dropIcon from '../../images/drop-area-icon.svg';

const DragArea: FC = () => {
    return (
        <section className={`border-2 border-dashed border-borderDashedColor rounded-md flex items-center justify-center`}>
            <div className={`w-32 text-center`}>
                <img src={dropIcon} alt='Перетащите сюда любой элемент из левой панели' className={`mb-3 mx-auto`} />
                <div className={`text-iris-100 text-sm mb-1`}>Перетащите сюда</div>
                <div className={`text-gray-500 text-xs`}>любой элемент из левой панели</div>
            </div>
        </section>
    );
}

export default DragArea;