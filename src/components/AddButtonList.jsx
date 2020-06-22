import React from "react";
import List from "./List/List";

const AddButtonList = () => (<List
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
        },
    ]}
/>)

export default AddButtonList;