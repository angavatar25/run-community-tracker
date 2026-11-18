"use client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Spinner } from "@/components/ui/spinner";

import { Partnership } from "@/types/partnership"
import { examplePartnerships } from "./dummy"
import { FillingTable } from "./filling-table";
import usePartnership from "@/hooks/usePartnership";
import { useEffect, useState } from "react";
import { ButtonWithIcon } from "@/components/button/ButtonWithIcon";
import { Button } from "@/components/ui/button";
import PartnershipModal from "@/components/modal/PartnershipModal";

async function getData(): Promise<Partnership[]> {
  // Fetch data from your API here.
  return examplePartnerships;
}

const DemoPage = () => {
  const { getPartnershipList, partnershipList, insertPartnershipData, getSuggestionsRes, loadSuggestions, geminiResponse } = usePartnership();

  const handleInsertPartnership = async (data: Partial<Partnership>) => {
    await insertPartnershipData(data)
    .then(() => {
      setIsModalOpen(false);
      getPartnershipList();
    })
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getPartnershipList();
  }, []);

  return (
    <>
      <PartnershipModal open={isModalOpen} onChange={setIsModalOpen} onClickSave={handleInsertPartnership} />    
      <div className="container">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Partnerships</h1>
          <ButtonWithIcon label="New Partnership" onAction={() => setIsModalOpen(true)} />
        </div>
        <FillingTable data={partnershipList} />
        <div>
          <h3>Need a help? use these suggestions</h3>
          <Button onClick={() => getSuggestionsRes({ status: "confirmed"})}>
            Find confirmed status
          </Button>
          <Button onClick={() => getSuggestionsRes({ contact_channel: "WhatsApp" })}>
            Find Contact Channel by WhatsApp
          </Button>
        </div>
        {loadSuggestions && (
          <div>
             <Spinner className="size-4" />
          </div>
        )}
        {!loadSuggestions && geminiResponse && (
          <div>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{geminiResponse}</ReactMarkdown>
          </div>
        )}
      </div>
    </>
  ) 
}

export default DemoPage;