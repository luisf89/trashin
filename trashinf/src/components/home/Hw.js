//HIW
import React from "react";
import HIW1 from '../../images/Recycling.png';
import HIW2 from '../../images/Green.png';
import HIW3 from '../../images/Skyline.png';
import './Hw.css';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;


export const Hw = ()=>(
    <div className='rows'>
        <div className='hiw'>
            <Row gutter={16} className="uk-flex uk-flex-wrap uk-flex-center">
                <Col span={8}>
                    <Card bordered={false}
                          style={{ width: 280}}
                          cover={<img alt="example" src={HIW1} />}
                    >
                            <p className="text">Nuestro planeta esta en peligro y necesitamos empezar a concientizar a la gente para reutilizar"</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={false}
                          style={{ width: 280}}
                          cover={<img alt="example" src={HIW2} />}
                    >
                            <p className="text">"No dejemos que nuestros bosques sean talados, un futuro sin naturaleza es lo que nos espera si no empezamos ya!"</p>   
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={false}
                          style={{ width: 280}}
                          cover={<img alt="example" src={HIW3} />}
                    >
                            <p className="text">"Todos somos responsables de ayudar a contribuir, y en un lugar como la Ciudad de México puede ser muy fácil."</p>
                    </Card>
                </Col>
            </Row>

        </div>
    </div>
);
