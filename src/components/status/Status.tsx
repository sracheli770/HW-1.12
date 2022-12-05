import React from 'react'
import { Status as StatusEnum } from '../../services/list-manager'
import css from './Status.module.scss'

type StatusProps = {
    status: StatusEnum
}

const Status = ({ status }: StatusProps) => {
    const clz = status === StatusEnum.bought ? css.bought : css.notBought
    return (
        <p className={clz}>{status}</p>
    )
}

export default Status