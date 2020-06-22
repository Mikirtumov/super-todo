import React, {useState} from "react";
import List from "../List/List";
import './AddButtonList.scss';

const AddListButton = () => {

    const [visiblePopup, setVisiblePopup] = useState(false)

    return (
        <div className='add-list'>
            <List
                onClick={() => alert(1)}
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
                    <h1>123</h1>
                </div>)}
        </div>
    );
};

export default AddListButton;