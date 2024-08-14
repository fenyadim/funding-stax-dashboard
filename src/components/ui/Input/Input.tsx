import cn from "classnames";
import React, { FC } from 'react';

import styles from './Input.module.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input: FC<Props> = ({className, ...props}) => {
    return (
        <>
            <input
                className={cn(styles.input, className)}
                {...props}
            />
        </>
    );
};

export default Input;