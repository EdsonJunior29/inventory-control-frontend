"use client";

import React from 'react';

type TableProps =  {
    tableName: string
    data: [ { id: number, name: string } ],
    onDetailClick: (id: number) => void;
}

export default function Table({ tableName, data, onDetailClick }: TableProps) {
    return (
     <>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead className="bg-blue-500 text-white">
                <tr>
                    <th className="px-4 py-2">{tableName}</th>
                    <th className="px-4 py-2">Informações</th>
                </tr>
            </thead>
            <tbody>
                {data.map((items) => (
                     <tr key={items.id} className="bg-blue-100 border-b border-gray-200 text-center">
                     <td className="px-4 py-2 text-black">{items.name}</td>
                     <td className="px-4 py-2">
                        <button 
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                            onClick={()=> onDetailClick(items.id)}
                        >
                            Detalhes
                        </button>
                     </td>
                 </tr>
                ))}
            </tbody>
        </table>
     </>
    )
  }