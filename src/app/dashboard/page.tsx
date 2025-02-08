'use client';

import { useState } from 'react';
import { Header } from "@/components/header";
import { Component as AreaChartCard } from "@/components/charts/area";
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const [modal, setModal] = useState(false);

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };
  return (
    <>
    <Header />
    <main className="min-h-screen flex items-center justify-center">
        {/* TODO: Remove Line 23 for Lines 24-26 */}
        <Button>[+] {"\u00A0"} Create New Project</Button>
        {/* hasProject
          ? <Dashboard />
          : <Button>Create New Project</Button>; */}
      </main>
    </>
  );
};

export default Dashboard;