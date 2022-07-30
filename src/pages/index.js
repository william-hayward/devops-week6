import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Filter from "../components/Filter";
import { rooms } from "../mocks/data";
export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>Solent Room Tracker</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Filter />
      <div className="min-w-full pr-20">
        <div className="bg-white max-w-[80%] mx-auto mt-11 p-5 rounded-lg shadow-md">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-xs border-b-2 font-semibold text-gray-700 border-gray-200 bg-gray-100 rounded-tl-lg">
                <th className="p-3 rounded-tl-lg">Room Number</th>
                <th>Building </th>
                <th>Student Capacity</th>
                <th className="rounded-tr-lg">Type</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((r, i) => (
                <tr ky={r.code} className={(i + 1) % 2 === 0 && "bg-gray-100"}>
                  <td className="p-2 text-blue rounded-l-lg">
                    <a className="cursor-pointer font-semibold">{r.number}</a>
                  </td>
                  <td> {r.building}</td>
                  <td> {r.capacity}</td>
                  <td className="rounded-r-lg"> {r.type.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 flex justify-between">
            <h3 className="text-sm mt-5">
              Showing <b>1</b> to <b>10</b> of <b>97</b> Results
            </h3>
            <div className="flex border-t-2 border-b-2 border-l-2 rounded-md">
              <div className="border-r-2 p-3">
                <ChevronLeftIcon className="h-5 w-5" />
              </div>
              <div className="border-r-2 p-3">1</div>
              <div className="border-r-2 p-3">2</div>
              <div className="border-r-2 p-3">3</div>
              <div className="border-r-2 p-3">...</div>
              <div className="border-r-2 p-3">8</div>
              <div className="border-r-2 p-3">9</div>
              <div className="border-r-2 p-3">10</div>
              <div className="border-r-2 p-3">
                <ChevronRightIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
