import type { MetaFunction } from "@remix-run/node";
import {Outlet} from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "UmaLegacy" },
    { name: "description", content: "Umamusume Legacy Tracker" },
  ];
};

const Index = () => {
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <header className="flex flex-col items-center w-full" />
      <main className="flex flex-col flex-grow items-center w-full">
        <div className="flex flex-col flex-grow items-center w-full">
          <Outlet />
        </div>
        <div className="flex flex-col items-center border-t border-t-gray w-full">
          <span className="text-xs text-gray py-2">UmaLegacy is not affiliated with Umamusume: Pretty Derby. All materials from the Umamusume: Pretty Derby game are trademarks and copyrights of Cygames, Inc.</span>
        </div>
      </main>
      <footer className="flex flex-col items-center w-full" />
    </div>
  );
};

export default Index;