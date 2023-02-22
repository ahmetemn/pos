

import StatisticCards from './StatisticCards';
import StatisticChart from './StatisticChart';
const Statistics = () => {
    return (
        <>
            <div className="px-6 "> 


                <h1 className='font-bold text-4xl text-center mb-4'>STATISTICS</h1>
                            <div className='flex flex-row gap-3 '>
                                <h1 className='text-stone-900 font-bold text-xl'>Hoşgeldin </h1>
                                <span className="font-bold  text-green-700  text-xl">Admin</span>
                            </div>


                       
                <StatisticCards/>
                <StatisticChart />
            </div>
        </>

    )
}

export default Statistics; 