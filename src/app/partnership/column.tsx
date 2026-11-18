"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { createColumnHelper } from "@tanstack/react-table"

import { type DataTableFeatures } from "./data-table-features"
import { Partnership } from "@/types/partnership"
import { Button } from "@/components/ui/button"

const columnHelper = createColumnHelper<DataTableFeatures, Partnership>()

export function useFillingColumns() {
  const router = useRouter()

  return React.useMemo(
    () =>
      columnHelper.columns([
        columnHelper.accessor("status", {
          header: "Status",
        }),
        columnHelper.accessor("brandName", {
          header: "Brand Name",
        }),
        columnHelper.accessor("contactName", {
          header: "PIC Name",
        }),
        columnHelper.accessor("contactChannel", {
          header: "Contact Channel",
        }),
        columnHelper.display({
          id: "action",
          header: () => <div className="text-center">Action</div>,
          cell: ({ row }) => {
            const id = row.original.id;

            const redirectToView = () => {
              router.push(`/partnership-detail/view/${id}`);
            };

            const redirectToEdit = () => {
              router.push(`/partnership-detail/edit/${id}`);
            };

            return (
              <div className="text-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={redirectToView}
                >
                  View
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={redirectToEdit}
                >
                  Edit
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => console.log("delete", id)}
                >
                  Delete
                </Button>
              </div>
            )
          },
        }),
      ]),
    [router]
  )
}