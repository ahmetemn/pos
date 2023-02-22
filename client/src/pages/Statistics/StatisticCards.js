
import { UserOutlined ,FireOutlined,SafetyOutlined,CodeSandboxOutlined} from "@ant-design/icons";
import "./StatisticCard.css"
const StatisticCards = () => {
    return (
        <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2  gap-5  mt-5">
            <div className="card-item bg-gray-900 p-10  rounded-md">
                <div className="flex flex-between gap-5">
                    <div  className="bg-white rounded-full w-16 h-16 p-3" >
                        <UserOutlined style={{ fontSize: '40px', color: '#08c' }} />
                    </div>
                    <div className=" ">
                            <p className="font-bold text-gray-50 text-lg mb-2">Total Customer</p>
                            <p className="font-bold text-gray-50 text-lg">6</p>
                    </div>
                </div>
            </div>
            <div className="card-item bg-purple-700 p-10  rounded-md">
                <div className="flex flex-between gap-5">
                    <div  className="bg-white rounded-full w-16 h-16 p-3" >
                    <FireOutlined  style={{ fontSize: '40px', color: 'red' }} />
                    </div>
                    <div className=" ">
                            <p className="font-bold text-gray-50 text-lg mb-2">Total Earning</p>
                            <p className="font-bold text-gray-50 text-lg">100.12$</p>
                    </div>
                </div>
            </div>
            <div className="card-item bg-rose-400 p-10  rounded-md">
                <div className="flex flex-between gap-5">
                    <div  className="bg-white rounded-full w-16 h-16 p-3" >
                    <SafetyOutlined   style={{ fontSize: '40px', color: 'green' }}/>
                    </div>
                    <div className=" ">
                            <p className="font-bold text-gray-50 text-lg mb-2">Total Sales</p>
                            <p className="font-bold text-gray-50 text-lg">6</p>
                    </div>
                </div>
            </div>
            <div className="card-item bg-amber-400 p-10  rounded-md">
                <div className="flex flex-between gap-5">
                    <div  className="bg-white rounded-full w-16 h-16 p-3" >
                    <CodeSandboxOutlined   style={{ fontSize: '40px', color: 'purple' }} />
                    </div>
                    <div className=" ">
                            <p className="font-bold text-gray-50 text-lg mb-2">Total Products</p>
                            <p className="font-bold text-gray-50 text-lg">15</p>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default StatisticCards;