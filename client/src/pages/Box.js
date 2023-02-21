

import { Button, Card, Table } from 'antd';
import { useState } from 'react';
import CreateBill from '../components/card/CreateBill';
const Box = () => {

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
                <Table dataSource={dataSource} columns={columns} className="border" pagination={false} />
                <div className="cart-total">
                    <Card className='mt-2 float-right w-72'>

                        <div className='flex justify-between'>
                            <span className=''>

                                Subtotal
                            </span>
                            <span className=' font-bold text-cyan-900' >
                                150$
                            </span>
                        </div>
                        <div className='flex justify-between my-2'>
                            <span className=''>
                                Kdv
                            </span>
                            <span className='font-bold text-red-700' >
                                15$
                            </span>
                        </div>
                        <hr />

                        <div className='flex justify-between'>
                            <span className='font-bold'>
                                TOTAL :
                            </span>
                            <span className='font-bold ' >
                                165$
                            </span>
                        </div>

                        <Button onClick={showModal} className='mt-2 font-bold' type='primary' block>Create Order</Button>
                    </Card>
                </div>
            </div>
                    <CreateBill isModalOpen={isModalOpen}  handleCancel={handleCancel}  /> 
        </>
    )
}


export default Box; 