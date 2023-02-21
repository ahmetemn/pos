
import { Card, Col, Row } from 'antd';
const Statistics = () => {
    return (
        <>
            <div className="px-6">
                <h1 className='font-bold text-4xl text-center mb-4'>STATISTICS</h1>


                <Row gutter={16}>
                    <Col span={4}>
                        <Card className='bg-slate-300 border-none rounded-lg' >


                            <div className='flex flex-row gap-3'>
                                <h1 className='text-stone-900 font-bold text-xl'>Hoşgeldin </h1>
                                <span className="font-bold  text-green-700  text-xl">Admin</span>
                            </div>


                        </Card>



                    </Col>
                </Row>


            </div>
        </>

    )
}

export default Statistics; 