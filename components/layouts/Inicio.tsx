import React from "react";
import {Layout} from "antd";
import Navbar from "../molecules/NavBar";

const { Header, Footer, Content } = Layout;



export default function InicioLayout() {
    return (
        <Layout style = {layoutStyle}>

            <Header style = {headerStyle}>
                <Navbar />
            </Header>

            <Layout>
                <Content style = {contentStyle}>
                </Content>
            </Layout>

            <Footer style={footerStyle}>
            </Footer>
        </Layout>
    )
};



/* ------------- E S T I L O S --------------- /*

/* E S T I L O   D E L   L A Y O U T */
const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
};

/* E S T I L O   D E L   H  E A D E R */
const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

/* E S T I L O   D E L   C O N T E N T */
const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};

/* E S T I L O   D E L   F O O T E R */
const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};