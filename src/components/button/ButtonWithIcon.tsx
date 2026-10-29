import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button";

interface TButtonWithIcon {
  label: string;
  onAction(): void; 
}

export function ButtonWithIcon({ label, onAction }: TButtonWithIcon) {
  return (
    <div className="flex gap-2">
      <Button variant="outline" onClick={onAction}>
        <Plus /> {label}
      </Button>
    </div>
  )
}
