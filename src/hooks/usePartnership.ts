import { createClient } from "@/lib/supabase/client"
import { useState } from "react";
import { Partnership } from "@/types/partnership";

const usePartnership = () => {
  const supabase = createClient();
  const [partnershipList, setPartnershipList] = useState<Partnership[]>([] );

  const getPartnershipList = async () => {
    const { data, error } = await supabase.from("partnership").select("*");

    console.log(data, "data");
    
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

    setPartnershipList(remapped);

    return remapped;
  }

  return {
    getPartnershipList,
    partnershipList,
  };
};

export default usePartnership;