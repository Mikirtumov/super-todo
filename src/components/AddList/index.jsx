import React, {useState} from "react";
import List from "../List/List";
import './AddButtonList.scss';
import Badge from "../Badge";
import closeSvg from '../../img/close.svg'



const AddList = ({colors}) => {

    const [visiblePopup, setVisiblePopup] = useState(false)
    const [selectedColor, setSelectedColor] = useState(colors[0].id)

    return (
        <div className='add-list'>
            <List
                onClick={() => setVisiblePopup(true)}
                items={[
                    {
                        className: "list__add-button",
                        icon: <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 16 16"
                            fill="none"

                        >
                            <path
                                xmlns="http://www.w3.org/2000/svg"
                                d="M8 1V15"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                xmlns="http://www.w3.org/2000/svg"
                                d="M1 8H15"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>,
                        name: 'Add Task'
                    }
                ]}
            />
            {visiblePopup && (
                <div className='add-list__popup'>
                    <img onClick={() => setVisiblePopup(false)} src={closeSvg} alt="Close Button" className="add-list__popup-close-btn"/>
                    <input className='field' type="text" placeholder="Add New Task"/>
                    <div className="add-list__popup-colors">

                        {
                            colors.map((color) =>
                                <Badge
                                    onClick={() => setSelectedColor(color.id)}
                                    key={color.id}
                                    color={color.name}
                                    className={ selectedColor=== color.id && 'active'}/>)
                        }
                    </div>
                    <button className="button">All Task</button>
                </div>)}
        </div>
    );
};

export default AddList;