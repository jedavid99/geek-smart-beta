import React, { useState } from 'react';
import { Avatar, Col, Divider, Drawer, List, Row, Form, Card } from 'antd';

export const PerfilUsuario = () => {
   
    return (
        <>
          <Form layout="vertical" >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item  name="name" label="Nombre y Apellido" >
                            <label htmlFor="">Jesus Henriquez</label>
                            </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="usuario" label="Usuario">
                            <label htmlFor="">Jesus@gamil.com</label>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="dni" label="DNI">
                            <label htmlFor="">96374468</label>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="rol"label="Rol del Usuario"
                        >
                            <label htmlFor="">Admin</label>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="cargo" label="Cargo del Usuario"  >
                            <label htmlFor="">tecnico</label>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="numero"b label="Numero de telefono" >
                            <label htmlFor="">115174468</label>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    );
}
