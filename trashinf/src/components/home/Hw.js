//HIW
import React from "react";
import HIW1 from '../../images/Recycling.png';
import HIW2 from '../../images/Green.png';
import HIW3 from '../../images/Skyline.png';
import {Link} from "react-router-dom";
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
                        <Meta
                            title="Nuestro planeta esta en peligro y necesitamos empezar a concientizar a la gente para reutilizar"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={false}
                          style={{ width: 280}}
                          cover={<img alt="example" src={HIW2} />}
                    >
                        <Meta
                            title="No dejemos que nuestros bosques sean talados, un futuro sin naturaleza es lo que nos espera si no empezamos ya!"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={false}
                          style={{ width: 280}}
                          cover={<img alt="example" src={HIW3} />}
                    >
                        <Meta
                            title="Todos somos responsables de ayudar a contribuir, y en un lugar como la Ciudad de México puede ser muy fácil."
                        />
                    </Card>
                </Col>
            </Row>

        </div>
    </div>
);
