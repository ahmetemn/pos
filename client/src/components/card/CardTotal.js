
import { Button } from "antd";
import { ClearOutlined, PlusCircleOutlined,MinusCircleOutlined } from '@ant-design/icons';


const CardTotal = () => {


    return (

        <div className="card h-full max-h-[calc(100vh_-_90px)] flex flex-col">
            <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
                Sepetteki Ürünler
            </h2>
            <ul className="card-items px-2 flex flex-col gap-y-2 pt-2 overflow-y-auto">
                <li className="card-item">
                    <div className="flex items-center justify-between">
                        <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" className="w-16 h-16 object-cover" alt="" />
                        <div className="flex pr-5">
                            <b className="font-bold">
                                Apple:
                            </b>

                            <span className="font-bold pl-2">
                                2$ x 2
                            </span>
                        </div>
                        <div className="py-4 px-2 flex  justify-between gap-2">
                           
                            <Button
                                type="primary"
                                size="small"
                                style={{borderRadius:"100px"}}
                                className="w-full flex items-center justify-center rounded-full"
                                icon={<MinusCircleOutlined/>}
                               
                         />
                                <span className="font-bold ">1</span>

                                <Button
                                type="primary"
                                size="small"
                                style={{borderRadius:"100px"}}
                                className="w-full flex items-center justify-center rounded-full"
                                icon={<PlusCircleOutlined />}
                               
                         />

                          
                        </div>
                    </div>
                </li>
                

            </ul>
            <div className="card-totals mt-auto">
                <div className="border-t border-b">
                    <div className="flex justify-between p-2">
                        <b>Ara Toplam</b>
                        <span className="font-bold">99₺</span>
                    </div>
                    <div className="flex justify-between p-2">
                        <b className="font-bold">KDV %8</b>
                        <span className="text-red-700 font-bold">+7.92₺</span>
                    </div>
                </div>
                <div className="border-b mt-4">
                    <div className="flex justify-between p-2">
                        <b className="text-xl text-green-500">Genel Toplam</b>
                        <span className="text-xl font-bold">99₺</span>
                    </div>
                </div>
                <div className="py-4 px-2">
                    <Button type="primary" size="large" className="w-full">
                        Sipariş Oluştur
                    </Button>
                    <Button
                        type="primary"
                        size="large"
                        className="w-full mt-2 flex items-center justify-center"
                        icon={<ClearOutlined />}
                        danger
                    >
                        Temizle
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CardTotal;