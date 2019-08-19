import React from 'react';
import { IconContext } from "react-icons";

const Icon = ({ children, size, color, className, style, attr }) => (
    <IconContext.Provider value={{size, color, className, style, attr}}>
        <div>
           { children }
        </div>
    </IconContext.Provider>
)

export default Icon;