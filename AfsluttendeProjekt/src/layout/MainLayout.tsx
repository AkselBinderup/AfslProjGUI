import { Footer } from "../components/Footer/Footer";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <main>
        <div style={{ position: "sticky", top: 0, zIndex: 6767 }}>
          <Header />
          <NavigationBar />
        </div>
        <Outlet/>
        <Footer />
      </main>
    </>
  );
};
