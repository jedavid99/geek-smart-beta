import React, { useRef, useState } from 'react';
import { Space, Table, Tag, Form, Input, Select, Button, Dropdown, Tooltip } from 'antd';
import { CheckCircleOutlined,  ClockCircleOutlined, SyncOutlined, PrinterOutlined ,SearchOutlined} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { OpcionesReport } from './OpcionesReport';

  

  
export const BotonImprimir= () => {
  
  return ( <div>
  
  <Button type="primary"><PrinterOutlined />Imprimir Reporte</Button><br />


</div>
 )
}
