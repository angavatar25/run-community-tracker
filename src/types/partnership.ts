export type PartnershipStatus = "new" | "contacted" | "negotiating" | "confirmed" | "rejected" | "closed";

export interface Partnership {
  id: string;
  brandName: string;
  contactName: string;
  contactChannel: string;
  collaborationType: string;
  status: PartnershipStatus;
  ownerName: string;
  lastContactAt: string | null;
  nextFollowUpAt: string | null;
  notes: string;
  messages: string;
  createdAt: string;
  updatedAt: string;
}
