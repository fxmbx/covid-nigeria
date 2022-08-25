import React from "react";
import { useGetCasesQuery } from "../redux/dataSlice";

function Table() {
  const { data, isLoading } = useGetCasesQuery();
  return (
    <>
      <ul className="flex justify-between p-6 ">
        <li>
          Total Samples Tested : <span> {data?.totalSamplesTested}</span>
        </li>
        <li>
          Total Confirmed Cases: <span> {data?.totalConfirmedCases}</span>
        </li>
        <li>
          Total Active Cases: <span> {data?.totalActiveCases}</span>
        </li>
        <li className="flex flex-col">Discharged:{data?.discharged}</li>
        <li>
          Death: <span> {data?.death}</span>
        </li>
      </ul>
      <div className="w-full flex flex-col p-6">
        <div className="overflow-x-scroll">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      State
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Confirmed Cases
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Deaths
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Discharged
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Cases On Admission
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data?.data?.states?.map((statedata) => (
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {statedata?.state}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {statedata?.confirmedCases}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        <a
                          className="text-red-500 hover:text-green-700"
                          href="#"
                        >
                          {statedata?.death}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          className="text-green-500 hover:text-green-700"
                          href="#"
                        >
                          {statedata?.discharged}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        {statedata?.casesOnAdmission}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      );
    </>
  );
}

export default Table;
