import React from "react";
import SideNav from "./_components/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="flex justify-center text-2xl">Dashboard</h1>
      <div className="flex flex-row">
        <SideNav />
        {children}
      </div>
    </div>
  );
}
