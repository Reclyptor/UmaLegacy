import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import NavigationBar from "~/widget/NavigationBar";
import {useLocation} from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "UmaLegacy" },
    { name: "description", content: "Umamusume Legacy Tracker" },
  ];
};

const Index = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <header className="flex flex-col items-center w-full border-b border-b-border">
        <NavigationBar />
      </header>
      <main className="flex flex-col items-center w-full flex-grow overflow-y-auto">
        <div className="flex flex-col items-center w-full min-h-fit flex-grow min-w-[640px] max-w-[1250px] bg-surface/95 backdrop-blur-3xl overflow-x-auto">
          { location.pathname !== "/" && <Outlet /> }
        </div>
      </main>
      <footer className="flex flex-col items-center w-full border-t border-t-border">
        <span className="text-center text-[10px] text-disabled py-1 w-fit leading-[10px]">UmaLegacy is not affiliated with Umamusume: Pretty Derby. All materials from the Umamusume: Pretty Derby game are trademarks and copyrights of Cygames, Inc.</span>
      </footer>
    </div>
  );
};

export default Index;