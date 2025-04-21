import { Outlet } from "react-router-dom";
import { Footer } from "../shared/components/layout/Footer";
import { Header } from "../shared/components/layout/Header";
import { Home } from "./home/Home";

export const Page = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
