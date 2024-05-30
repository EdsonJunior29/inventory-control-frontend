"use client";

import Table from "../components/Table";

export default function Products() {

    const tableHeadName: string =  'Nome do Produtos';

    const product: string =  'Produtos';

    const products = [
        { id: 1, name: 'Primeiro Produto' },
        { id: 2, name: 'Segundo Produto' },
    ];
    
    const handleDetailClick = (id: number) => {
      console.log('Detalhes do produto ID:', id);
    };

    return (
        <>
            <div className="text-white mt-4 ml-3">{product}</div>
            <div className="text-white ml-3 mt-2 px-4">
                <div className="max-w-screen-lg mx-auto">
                    <Table 
                        tableName={tableHeadName} 
                        data={products} 
                        onDetailClick={handleDetailClick} 
                    />
                </div>
            </div>
        </>
    );
}