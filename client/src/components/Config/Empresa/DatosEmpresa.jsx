import React from 'react';
import { Descriptions ,Card} from 'antd';
import { MapComponent } from './Maps';
import { EditarLogo } from './EditarLogo';
const items = [
    {
        key: '1',
        label: 'Nombre de la empresa',
        children: 'GEEK SMART',
    },
    {
        key: '6',
        label: 'CUIT',
        children: '2069476689',
    },
    {
        key: '2',
        label: 'Telefono',
        children: '1151747883',
    },
    {
        key: '3',
        label: 'Dueño',
        children: 'Juan limonta',
    },
    {
        key: '4',
        label: 'Tipo de negocio',
        children: 'Servicio tecnico',
    },
    {
        key: '5',
        label: 'Dirrecion',
        children: 'Cam. de la Loma 5235, B1644CIG Victoria, Provincia de Buenos Aires',
    },
];
export const DatosEmpresa = () => 
<>
<Card>
<Descriptions title="Datos del negocio" items={items} />
<MapComponent></MapComponent>
</Card>
</>
