"use client"

import { useFillingColumns } from "./column"
import { DataTable } from "./data-table"
import { Partnership } from "@/types/partnership"

export function FillingTable({ data }: { data: Partnership[] }) {
  const columns = useFillingColumns()

  return <DataTable columns={columns} data={data} />
}