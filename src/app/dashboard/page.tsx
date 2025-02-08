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
        {/* Grid container: one column on small screens, three columns on laptops/desktops */}
        <Button>Create New Project</Button>
      </main>
    </>
  );
};

export default Dashboard;