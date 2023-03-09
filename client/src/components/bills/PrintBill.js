import React from 'react'
import {  Modal } from 'antd';
import PrintButton from './PrintButton';
const PrinBill = ({ isModalOpen, handleCancel }) => {

    return (
        <Modal title="Bill" open={isModalOpen} onCancel={handleCancel} footer={false} width={1000} >
            <hr />

            <section className='py-20 bg-black'>
                <div className='max-w-5xl mx-auto  bg-white px-6'>
                    <article className='overflow-hidden'>
                        <div className='logo my-6'>
                            <h2 className='text-4xl font-bold text-slate-700'>LOGO</h2>
                        </div>

                        <div className="bill-details flex justify-between ">
                            <div className=''>
                                <div className='text-md text-slate-500'>
                                    <p className='font-bold'>Bill Detail</p>
                                    <p>Street</p>
                                    <p>Apartment Number</p>
                                    <p>District</p>
                                    <p>City</p>
                                </div>
                            </div>
                            <div>
                                <div className='text-md text-slate-500'>
                                    <p className='font-bold'>Bill </p>
                                    <p>The Company</p>
                                    <p>Street</p>
                                    <p>CA 000</p>
                                </div>
                            </div>
                            <div>
                                <div className='text-md text-slate-500'>
                                    <div>
                                        <p className='font-bold'>Bill Number</p>
                                        <p>Street</p>
                                        <p className='font-bold'>Bill Date</p>
                                        <p>20/12/2022</p>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className='text-md text-slate-500'>
                                    <p className='font-bold'>Condition</p>
                                    <p>10 Gün</p>
                                    <p className='font-bold'>Due</p>
                                    <p>20/12/2022</p>
                                </div>
                            </div>
                        </div>

                        <div className="bill-table-area">
                            <table className='min-w-full divide-y divide-slate-500 overflow-hidden'>
                                <thead>
                                    <tr >
                                        <th scope='col' className='py-3.5 pl-4 text-left font-bold text-slate-700 sm:pl-6 md:pl-0 sm:table-cell ' >Picture</th>
                                        <th scope='col' className='py-3.5 pl-4 text-left font-bold text-slate-700 sm:pl-6 md:pl-0 sm:table-cell' >Title</th>
                                        <th scope='col' className='py-3.5 pl-4 text-left font-bold text-slate-700 sm:pl-6 md:pl-0 sm:table-cell' >Price</th>
                                        <th scope='col' className='py-3.5 pl-4  font-bold text-slate-700 sm:pl-6 md:pl-0 sm:table-cell text-center' >Pieces</th>
                                        <th scope='col' className='py-3.5 pl-4  font-bold text-slate-700 sm:pl-6 md:pl-0 sm:table-cell text-end' >Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className='py-4  pr-3'>
                                            <img src="https://termodizayn.com/thumb.php?p=./img/uploads/muhafazakosullari/icerik/49-elma1.jpg&h=434" alt="" className='w-12 h-12 object-contain ' />
                                        </td>
                                        <td className='py-4  pr-3'>
                                            <span className='font-medium'>Şalgam</span>
                                        </td>
                                        <td className='py-4  pr-3'>
                                            <span className='font-medium'>10$</span>
                                        </td>
                                        <td className='py-4  pr-3 text-center'>
                                            <span className='font-medium  '>1 </span>
                                        </td>
                                        <td className='py-8  pr-3 text-end'>
                                            <span className='font-medium pl-2.5 '>10$ </span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr >
                                        <th className='text-right py-3' colSpan="4" scope='row'>
                                            Sub Total
                                        </th>

                                        <th className='text-right  ' colSpan="4" scope='row'>
                                            <span className='p-1.5' >10$</span>
                                        </th>
                                    </tr>
                                    <tr >
                                        <th className='text-right py-3' colSpan="4" scope='row'>
                                            Kdv
                                        </th>

                                        <th className='text-right ' colSpan="4" scope='row'>
                                            <span className='p-1.5 text-red-700'> +10$</span>
                                        </th>
                                    </tr>

                                    <tr  >
                                        <th className='text-right py-3' colSpan="4" scope='row'>
                                            <span className='text-green-900'>Total</span>
                                        </th>

                                        <th className='text-right    ' colSpan="4" scope='row'>
                                            <span className='p-1.5 text-green-900' >20$</span>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>

                            <div className='py-2'>
                                <div className='border-t pt-9 border-slate-900'>
                                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe molestias atq
                                        ue unde laborum aperiam vel ut mollitia cum magnam perferendis, repellat architecto dolores,
                                        doloribus, delectus magni libero inventore molestiae
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tempore quos dolorum cupiditate alias iure ducimus eius repudiandae, quibusdam max
                                        ime reiciendis corrupti ipsam? Perferendis nobis sunt deserunt rerum perspiciatis voluptatum.!</p>
                                </div>

                            </div>


                        </div>
                    </article>
                </div>
            </section>


            <div className='flex justify-end mt-2'>
                   <PrintButton></PrintButton>
            </div>
        </Modal>
    )
}

export default PrinBill;