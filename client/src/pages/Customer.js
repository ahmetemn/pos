

import {  Table } from 'antd';


const Customers = () => {

    
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
            <h1 className='font-bold text-4xl text-center mb-4'>USERS</h1>
                <Table dataSource={dataSource} columns={columns} className="border" pagination={false} />
               
            </div>
                  
        </>
    )
}


export default Customers; 