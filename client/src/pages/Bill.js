

import { Button, Card, Table } from 'antd';
import { useState } from 'react';
import PrinBill from '../components/bills/PrintBill';

const Bill = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
   
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <>
            <div className="px-6">
            <h1 className='font-bold text-4xl text-center mb-4'>BİLLS</h1>
                <Table dataSource={dataSource} columns={columns} className="border" pagination={false} />
                <div className="cart-total">
                    <Card className='mt-2 float-right w-72'>

                        <Button onClick={showModal} className='mt-2 font-bold' type='primary' danger block>Print</Button>
                    </Card>
                </div>
            </div>
                    <PrinBill isModalOpen={isModalOpen}  handleCancel={handleCancel}  /> 
        </>
    )
}


export default Bill; 