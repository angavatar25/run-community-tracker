"use client";

import { Partnership } from "@/types/partnership"
import { examplePartnerships } from "./dummy"
import { FillingTable } from "./filling-table";
import usePartnership from "@/hooks/usePartnership";
import { useEffect, useState } from "react";
import { ButtonWithIcon } from "@/components/button/ButtonWithIcon";
import PartnershipModal from "@/components/modal/PartnershipModal";

async function getData(): Promise<Partnership[]> {
  // Fetch data from your API here.
  return examplePartnerships;
}

const DemoPage = () => {
  const { getPartnershipList, partnershipList } = usePartnership();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getPartnershipList();
  }, []);

  return (
    <>
      <PartnershipModal open={isModalOpen} onChange={setIsModalOpen} />    
      <div className="container">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Partnerships</h1>
          <ButtonWithIcon label="New Partnership" onAction={() => setIsModalOpen(true)} />
        </div>
        <FillingTable data={partnershipList} />
      </div>
    </>
  ) 
}

export default DemoPage;