import React from 'react'
import { Modal, Form, Input, Select, Button, Card } from 'antd';
const CreateBill = ({ isModalOpen, handleCancel }) => {
    const onFinish=(values)=>{
        console.log(values)
    }  
      return (
        <Modal title="Create Bill" open={isModalOpen} onCancel={handleCancel} footer={false}   >
            <hr />

            <Form layout="vertical" onFinish={onFinish} >
                <Form.Item className='mt-2 font-bold' label="Customer Name" name={"CustomerName"} rules={[{ required: true  } ,]}>
                    <Input></Input>
                </Form.Item>
                <Form.Item className='mt-2 font-bold' label="Phone Number"name={"PhoneNumber"}  rules={[{ required: true }]}>
                    <Input   type='number'></Input>
                </Form.Item>
                <Form.Item className='mt-2 font-bold' label="Payment" name={"Payment"} rules={[{ required: true }]}>
                    <Select placeholder="Payment Method">
                        <Select.Option  value="Cash"></Select.Option>
                        <Select.Option value="Credit Card"></Select.Option>

                    </Select>

                    </Form.Item>
                    <Card className='mt-5 '>

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

                        <Button htmlType='submit' className='mt-2 font-bold' type='primary' block>Create Order</Button>
                    </Card>
              

            </Form>

        </Modal>
    )
}

export default CreateBill;