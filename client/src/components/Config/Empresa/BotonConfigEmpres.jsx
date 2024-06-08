import React,{ useState } from 'react';
import { EditFilled, ShopFilled, FileImageFilled } from '@ant-design/icons';
import { Drawer, FloatButton ,Button,Radio,Space,Tooltip} from 'antd';
import { EditarLogo } from './EditarLogo';
import { EditarDatosEmpresa } from './EditarDatosEmpresa';




  

export const BotonConfigEmpres = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  }
  const showDrawer2 = () => {
    setOpen2(true);
  };
 
  const onClose = () => {
    setOpen(false);
  }
  const onClose2 = () => {
    setOpen2(false);
  };
  return (
  <>
    <FloatButton.Group
      trigger="click"
      type="primary"
      style={{
        right: 24,
      }}
      icon={<EditFilled />}
    >    <Tooltip placement="leftBottom" title="Cambiar datos" color='blue'>

      <FloatButton onClick={showDrawer2} type="primary"
        icon={<ShopFilled />} />
                </Tooltip>
                <Tooltip placement="leftBottom" title="Cambiar logo" color='blue'>
      <FloatButton  onClick={showDrawer}  type="primary" icon={<FileImageFilled />} />
      </Tooltip>

    </FloatButton.Group>
    <Space>
        
        
      </Space>
      <Drawer

        title="Editar Logo"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
      <EditarLogo></EditarLogo>
      </Drawer>
      <Drawer title="Basic Drawer" onClose={onClose2} open={open2}>
      <EditarDatosEmpresa></EditarDatosEmpresa>
      </Drawer>
  </>

)
 }
