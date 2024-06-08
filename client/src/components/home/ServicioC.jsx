import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

export const ServicioC = () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <Card size={[80, 20]} className='flex px-2  w-full max-w-100'>
            <Statistic
              title="Equipos reparados"
              value={11.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card >
            <Statistic
              title="Garantias"
              value={9.3}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </>

  )
}