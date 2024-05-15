import React from "react";
import SideNav from "./_components/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <SideNav />
        {children}
      </div>
    </div>
  );
}
