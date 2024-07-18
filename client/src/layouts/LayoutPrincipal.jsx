import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CloseOutlined,
  MenuOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Button } from "antd";
import { MenuTabs } from "./MenuTabs";
import { MenuPage } from "./MenuPage";
import { useMediaQuery } from "@mui/material";

const { Header, Content, Footer, Sider } = Layout;

export const LayoutPrincipal = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();

  const logout = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    navigate("/", { replace: true });
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout style={{ minHeight: "120vh", background: "#4f46e5" }}>
        {isDesktop && (
          <Sider
            style={{
              background: "#4f46e5",
              transition: "width 0.3s",
            }}
            hidden={collapsed}
            collapsed={collapsed}
            onBreakpoint={(broken) => {
              setCollapsed(broken);
            }}
          >
            <MenuPage />
          </Sider>
        )}
        <Layout className="w-full">
          <Header className="flex flex-row ">
            {isDesktop && (
              <div>
                <Button
                  className="ml-0 mt-4"
                  type="text"
                  onClick={toggleCollapsed}
                >
                  {collapsed ? (
                    <MenuOutlined
                      style={{ fontSize: "20px", color: "#ffff" }}
                    />
                  ) : (
                    <CloseOutlined
                      style={{ fontSize: "20px", color: "#ffff" }}
                    />
                  )}
                </Button>
              </div>
            )}

            <button
              className="nav-link-mobile ml-auto hover:border-l-amber-300"
              onClick={logout}
            >
              <PoweroffOutlined
                className="ml-auto hover:border-l-amber-300"
                style={{ fontSize: "16px", color: "#ffff" }}
              />
            </button>
          </Header>

          <Content style={{ margin: "0 10px" }}>
            <Breadcrumb style={{ margin: "10px 0" }}></Breadcrumb>
            {children}
            <MenuTabs />
          </Content>
          <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>
      </Layout>
    </>
  );
};