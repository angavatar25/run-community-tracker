import { Partnership } from "@/types/partnership"
import { examplePartnerships } from "./dummy"
import { FillingTable } from "./filling-table";

async function getData(): Promise<Partnership[]> {
  // Fetch data from your API here.
  return examplePartnerships;
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container">
      <h1 className="py-5 text-2xl font-bold">Partnerships</h1>
      <FillingTable data={data} />
    </div>
  )
}