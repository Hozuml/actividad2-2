import React from "react";
import { Button, Layout } from "antd";
import NavButtons from "../molecules/NavButtons";
import IconButton from "../atoms/IconButton";
import Logo from "../atoms/Logo";
import InfoCard from "../molecules/InfoCard";

const { Header, Content, Footer } = Layout;

export default function InicioLayout() {
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Logo />
                    <NavButtons />
                    <IconButton />
                </div>
            </Header>

            <Layout>
                <Content style={contentStyle}>
                    <div style={{
                        height: "800px", // Corregido
                        width: "100%",
                        backgroundImage: "url('assets/bg_main_card.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        borderRadius: 0,
                        boxShadow: "0 4px 24px rgba(0,0,0,0.2)"
                    }}>
                        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: 16 }}>
                            Unlock Your Potential With Expert-Led Courses.
                        </h1>
                        <p style={{ fontSize: "1.25rem", marginBottom: 32 }}>
                            Explore a vast library of courses taught by industry leaders and passionate
                            educators. Learn at your own pace, on your own schedule.
                        </p>
                        <div style={{ display: "flex", gap: 16 }}>
                            <Button type="primary" size="large">Explore Courses</Button>
                            <Button size="large" ghost>Sign up</Button>
                        </div>
                    </div>

                    {/* InfoCards */}
                    <div style={{ marginTop: 48 }}>
                        <h2 style={{ color: "#fff", fontWeight: "bold", marginBottom: 32 }}>Featured Courses</h2>
                        <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
                            <InfoCard
                                image="assets/bg_card_1.png"
                                title="Introduction to Python Programming"
                                text="Learn the basics of python and build your first program."
                            />
                            <InfoCard
                                image="assets/bg_card_2.png"
                                title="UI/UX Design Fundamentals"
                                text="Master the principles of user interface and user experience."
                            />
                            <InfoCard
                                image="assets/bg_card_3.png"
                                title="Entrepenurship 101: Launching Your Startup"
                                text="Develope a bussines plan and learn how to secure fundings."
                            />
                        </div>
                    </div>
                </Content>
            </Layout>

            <Footer style={footerStyle}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#b9b9b9"
                }}>
                    <h3 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: 16 }}>
                        Ready to start learning?
                    </h3>
                    <p style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: 16 }}>
                        Join thousands of learners and take the next step in your career or personal growth in general.
                    </p>
                </div>
            </Footer>
        </Layout>
    );
}

/* ------------- E S T I L O S --------------- */

/* E S T I L O   D E L   L A Y O U T */
const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden'
};

/* E S T I L O   D E L   H  E A D E R */
const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: 'black',
    height: "auto",
    paddingInline: "0",
    lineHeight: '64px',
    backgroundColor: '#b9b9b9',
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