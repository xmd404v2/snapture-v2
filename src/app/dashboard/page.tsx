"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Component as AreaChartCard } from "@/components/charts/area";
import { Button } from "@/components/ui/button";
import CreateNewProject from "@/components/forms/createProject/CreateNewProject"; // Import the modal form

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
        <Button onClick={handleModalOpen}>
          [+] {"\u00A0"} Create New Project
        </Button>
      </main>

      {/* Modal Component */}
      {modal && <CreateNewProject isOpen={modal} onClose={handleModalClose} />}
    </>
  );
};

export default Dashboard;
