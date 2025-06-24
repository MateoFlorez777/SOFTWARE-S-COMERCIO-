import { Button, Card, Divider } from '@mui/material'
import React, { useState } from 'react'
import TransactionTable from './TransactionTable';
import Payouts from './PayoutsTable';
import { useAppSelector } from '../../../Redux Toolkit/Store';

const tab = [
    { name: "Transacción" },
    // { name: "Payouts" }
]
const Payment = () => {
    const [activeTab, setActiveTab] = useState(tab[0].name);
    const { sellers } = useAppSelector((store) => store);

    const handleActiveTab = (item:any) => {
        setActiveTab(item.name);
    }
    return (
        <div>
            <h1 className='pb-5 font-bold text-xl'>Todos los Pagos</h1>
        </div>
    )
}

export default Payment