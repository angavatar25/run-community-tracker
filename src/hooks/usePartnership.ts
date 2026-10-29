import { createClient } from "@/lib/supabase/client"
import { useState } from "react";
import { Partnership } from "@/types/partnership";

const usePartnership = () => {
  const supabase = createClient();

  const [partnershipList, setPartnershipList] = useState<Partnership[]>([]);
  const [partnershipDetail, setPartnershipDetail] = useState<Partnership | null>(null);
  const getPartnershipList = async () => {
    const { data, error } = await supabase.from("partnership").select("*");
    
    if (error) {
      throw error;
    }

    const remapped = data?.map(item => ({
      ...item,
      brandName: item.brand_name,
      contactName: item.contact_name,
      contactChannel: item.contact_channel,
      status: item.status,
    }));

    console.log(remapped);

    setPartnershipList(remapped);

    return remapped;
  };

  const getPartershipDetail = async (id: string) => {
    const { data, error } = await supabase.from("partnership").select("*").eq("id", id).single();

    if (error) {
      throw error;
    }

    const remapped = {
      ...data,
      brandName: data.brand_name,
      contactName: data.contact_name,
      contactChannel: data.contact_channel,
      collaborationType: data.collaboration_type,
      status: data.status,
    };

    setPartnershipDetail(remapped);
    return remapped;
  };

  const insertPartnershipData = async (data: Partial<Partnership>) => {
    const { error } = await supabase.from("partnership").insert({
      brand_name: data.brandName,
      owner_name: data.ownerName,
      contact_channel: data.contactChannel,
      collaboration_type: data.collaborationType,
      status: data.status,
      notes: data.notes,
      messages: data.messages,
      contact_name: "test",
    });

    if (error) {
      throw error;
    }
  }

  return {
    getPartnershipList,
    partnershipList,
    getPartershipDetail,
    partnershipDetail,
    insertPartnershipData,
  };
};

export default usePartnership;