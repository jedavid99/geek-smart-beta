import React from "react";
import {
  ToolTwoTone,
  PushpinTwoTone,
  TagTwoTone,
  FireTwoTone,
  ShoppingTwoTone,
  StarTwoTone,
} from "@ant-design/icons";
import { Avatar, Space } from "antd";
export const FotoUsuario = () => (
  <div>
    <Space direction="vertical" className="ml-9" size={16}>
      <Space wrap size={16}>
        <Avatar size="large" icon={<ToolTwoTone />} />
        <Avatar size="large" icon={<PushpinTwoTone />} />
        <Avatar size="large" icon={<TagTwoTone />} />
        <Avatar size="large" icon={<FireTwoTone />} />
        <Avatar size="large" icon={<ShoppingTwoTone />} />
        <Avatar size="large" icon={<StarTwoTone />} />
      </Space>
    </Space>
  </div>
);
