import React from "react";
import { LayoutPrincipal } from "../layouts/LayoutPrincipal";
import "../App.css";
import { TablaReport } from "../components/Report/TablaReport";
import { LineaRecordatorio } from "../components/home/lineaRecordatorio";
import { HomeOutlined, FilePdfFilled } from "@ant-design/icons";
import { Breadcrumb, Card, Space } from "antd";
import { ServicioTotal } from "../components/home/ServicioTotal";
import { BotonImprimir } from "../components/Report/BotonImprimirReport";
import { BarChartMes } from "../components/home/barcharMes";
import { BarChartServise } from "../components/home/chartServicio";

export const Reportes = () => {
  return (
    <div>
      <LayoutPrincipal>
        <Breadcrumb
          items={[
            {
              href: "/home",
              title: <HomeOutlined />,
            },
            {
              title: (
                <>
                  <FilePdfFilled />
                  <span>Reportes</span>
                </>
              ),
            },
          ]}
        />

        <Card>
          <div>
            <ServicioTotal />
          </div>
          <div className="flex flex-row w-full ml-4 mt-9 gap-x-4">
            <div className="flex-1 overflow-x-auto text-sm">
              <TablaReport />
            </div>
            <div className="flex-1 ml-2">
              <LineaRecordatorio />
            </div>
          </div>
          <div className=" mt-9">
            <BarChartMes />
            <div div className="flex flex-row w-full ml-4 mt-9 gap-x-4">
              <BarChartServise />
            </div>
          </div>
          <BotonImprimir />
        </Card>
        <FloatButton
          className="float-btn  hidden-on-desktop"
          type="primary"
          icon={<FilePdfFilled />}
        />
      </LayoutPrincipal>
    </div>
  );
};
