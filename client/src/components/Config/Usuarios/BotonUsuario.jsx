import { PlusCircleFilled, QuestionCircleOutlined, PlusOutlined, WechatFilled, UpCircleFilled } from '@ant-design/icons';

import React, { useState } from 'react';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, FloatButton, Tooltip } from 'antd';
import { FormAgreUser } from './FormAgreUsua';
import { FormChats } from './chat/ForChats';



export const BotonUsuarios = () => {
    const [open, setOpen] = useState(false);
    const [openchat, setChat] = useState(false);
    const showDrawer = () => { setOpen(true); };
    const showChat = () => { setChat(true); };
    const onCloseChat = () => { setChat(false); };
    const onClose = () => { setOpen(false); };

    return (

        < >
            <FloatButton.Group icon={<UpCircleFilled />} trigger="click" type="primary" style={{ right: 24, }}>
                <Tooltip placement="leftBottom" title="Agragar usuario" color='blue'>
                    <FloatButton icon={<PlusCircleFilled />} onClick={showDrawer} type="primary" />
                </Tooltip>
                <Tooltip placement="leftBottom" title="Chats" color='blue'>
                    <FloatButton icon={<WechatFilled />} onClick={showChat} type="primary" />
                </Tooltip>
            </FloatButton.Group>
            <Drawer title="Agregar Usuario" width={400} onClose={onClose} open={open} styles={{ body: { paddingBottom: 80, }, }} >
                <FormAgreUser></FormAgreUser>
            </Drawer>
            <Drawer width={300} onClose={onCloseChat} open={openchat} >
                <FormChats></FormChats>
            </Drawer>
        </>
    )
}
