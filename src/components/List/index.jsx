import React from "react";
import './List.scss';
import classNames from 'classnames';
import Badge from "../Badge";
import removeSvg from '../../img/remove.svg'

const Index = ({items, isRemovable, onClick, onRemove}) => {

    const removeList = (item) => {
        if(window.confirm("are you sure you want to delete")){
            onRemove(item)
        }
    }

    return (

        <ul onClick={onClick} className="list">
            {items.map((item, index) => (

                <li key={index} className={classNames(item.className, {active: item.active})}>
                    <i>
                        {item.icon ? (
                            item.icon
                        ) : (
                            <Badge color={item.color}/>
                        )}
                    </i>
                    <span>{item.name}</span>
                    {isRemovable && (
                        <img
                            className='list__remove-icon'
                            src={removeSvg}
                            alt="Remove Icon"
                            onClick={() => removeList(item)}
                        />
                    )}

                </li>
            ))}

        </ul>


    );
};

export default Index;