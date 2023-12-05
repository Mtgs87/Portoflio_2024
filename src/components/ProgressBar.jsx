
import React from "react";
import { CDBProgress, CDBBadge } from 'cdbreact';

function ProgressBar(props){
    return (
        <div className="flex flex-row items-center">
                        <CDBBadge className="text-gray-200 place-content-center font-spegiel-bold w-4/12 transform transition duration-500 hover:scale-105" color={props.color} borderType="pill">
                        {props.language}
                        </CDBBadge>
                        <CDBProgress
                            className="ml-2"
                            value={props.value}
                            colors={props.color}
                        />
                    </div>
    )
}
export default ProgressBar;