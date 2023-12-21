import { Navbar } from "./_components/navbar";

import { LayoutProps } from "@/types/layout-component";

const MarketingLayout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;
