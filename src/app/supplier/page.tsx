"use client";

import Table from "../components/Table";

export default function Supplier() {

    const tableHeadName: string =  'Nome do Fornecedor';

    const supplier: string =  'Fornecedores';

    const suppliers = [
        { id: 1, name: 'Primeiro fornecedor' },
        { id: 2, name: 'Segundo fornecedor' },
    ];
    
    const handleDetailClick = (id: number) => {
      console.log('Detalhes do fornecedor ID:', id);
    };

    return (
        <>
            <div className="text-white mt-4 ml-3">{supplier}</div>
            <div className="text-white ml-3 mt-2 px-4">
                <div className="max-w-screen-lg mx-auto">
                   <Table 
                        tableName={tableHeadName} 
                        data={suppliers} 
                        onDetailClick={handleDetailClick} 
                    />
                </div>
            </div>
        </>
    );
}