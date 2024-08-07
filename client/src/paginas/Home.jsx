import React from "react";
import { LayoutPrincipal } from "../layouts/LayoutPrincipal";
import { Tareas } from "../components/home/Tareas";
import { Card, FloatButton } from "antd";
import { TablaReport } from "../components/Report/TablaReport";
import { BarChartServise } from "../components/home/chartServicio";
import { BarChartMes } from "../components/home/barcharMes";
import { DashboardFilled } from "@ant-design/icons";
import "../App.css";


export const Home = () => {

  
  return (
    <LayoutPrincipal>
      <Card>
        <div className=" ">
        <Card><BarChartMes /></Card>  
        </div>
        <div className="flex flex-col w-full mx-2 my-2 gap-x-4 sm:flex-col md:flex-row">
          <div className="flex-1 overflow-x-auto text-sm md:text-base lg:text-lg">
            <TablaReport />
          </div>
          <div className="flex-1">
            <BarChartServise />
          </div>
        </div>
        <div className=" mt-10">
          <Tareas />
        </div>
        <FloatButton
          className="float-btn  hidden-on-desktop"
          type="primary"
          icon={<DashboardFilled />}
        />
      </Card>
    </LayoutPrincipal>
  );
};
