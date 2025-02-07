'use client';

import { useState } from 'react';
import { Header } from "@/components/Header";

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
      <main className="container mx-auto p-4">
        <br />
        <h1>
            Dashboard Page
        </h1>
      </main>
    </>
  );
};

export default Dashboard;