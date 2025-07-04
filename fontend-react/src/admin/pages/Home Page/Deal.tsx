import { Button } from '@mui/material'
import React, { useState } from 'react'
import DealsTable from './DealsTable'
import { useAppSelector } from '../../../Redux Toolkit/Store'
import DealsCategoryTable from './DealsCategoryTable'
import CreateDealForm from './CreateDealForm'
const tab = [
    { name: "Oferta" },
    { name: "Categorías" },
    { name: "Crear Oferta" }
]
const Deal = () => {
    const [activeTab, setActiveTab] = useState(tab[0].name);
    const { sellers } = useAppSelector((store) => store);

    const handleActiveTab = (item: any) => {
        setActiveTab(item.name);
    }
    return (
        <div>
            <div className=''>

                <div className='flex gap-4'>
                    {tab.map((item) => <Button onClick={() => handleActiveTab(item)} variant={activeTab === item.name ? "contained" : "outlined"}>{item.name}</Button>)}

                </div>
                <div className='mt-5'>
                    {activeTab === "Oferta" ? <DealsTable /> : activeTab==="Categorías"? <DealsCategoryTable />:<div className='mt-5 border-t flex flex-col justify-center items-center h-[70vh]'>

                        <CreateDealForm/></div>}
                </div>

            </div>
        </div>
    )
}

export default Deal