import React, { useState } from 'react';
import { Avatar, Col, Divider, Drawer, List, Row ,Card} from 'antd';
import { PerfilUsuario } from './PerfilUsuario';
import { OpcionesUsuario } from './OpcionesEditar';




export const UsuariosLista = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Card>
      <List
        dataSource={[
          {
            id: 1,
            name: 'Lily',
            rol:'usuairo',
          },
          {
            id: 2,
            name: 'Lily',
            rol:'usuairo',
          },
          
        ]}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              

            ]}
          >
                    

            <List.Item.Meta
              avatar={
                <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
              }
              title={<a onClick={showDrawer}>{item.name}</a>}
              description={item.rol}
            />
            <OpcionesUsuario></OpcionesUsuario>
          </List.Item>
        )}
      />
      </Card>
      <Drawer width={450} placement="right" closable={false} onClose={onClose} open={open}>

      <PerfilUsuario></PerfilUsuario>
      </Drawer>

    </>
  );
}
