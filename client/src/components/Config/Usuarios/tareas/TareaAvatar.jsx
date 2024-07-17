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
export const TareaAvatar = () => (
  <div className="flex flex-row">
  <Avatar className="mx-10" size="large" icon={<ToolTwoTone />} />
  <Avatar className="mx-2" size="large" icon={<PushpinTwoTone />} />
  <Avatar className="mx-14" size="large" icon={<TagTwoTone />} />
  <Avatar className="mx-2" size="large" icon={<FireTwoTone />} />
  <Avatar className="mx-10" size="large" icon={<ShoppingTwoTone />} />
  <Avatar className="mx-3" size="large" icon={<StarTwoTone />} />
</div>
);
