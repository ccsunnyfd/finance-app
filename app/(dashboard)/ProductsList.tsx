'use client'

import BoxHeader from './components/BoxHeader'
import { GetProductsResponse } from '../product/types'
import { Box } from '@mui/material'
import { DataGrid, GridCellParams } from '@mui/x-data-grid'

type Props = {
  data: GetProductsResponse[]
}

const productColumns = [
  {
    field: '_id',
    headerName: 'id',
    flex: 1,
  },
  {
    field: 'expense',
    headerName: 'Expense',
    flex: 0.5,
    renderCell: (params: GridCellParams) => `$${params.value}`,
  },
  {
    field: 'price',
    headerName: 'Price',
    flex: 0.5,
    renderCell: (params: GridCellParams) => `$${params.value}`,
  },
]

const ProductsList = ({ data }: Props) => {
  return (
    <div className="h-full w-full">
      <BoxHeader
        title="List of Products"
        sideText={`${data?.length} products`}
      />
      <Box
        mt="0.5rem"
        p="0 0.5rem"
        height="75%"
        sx={{
          '& .MuiDataGrid-root': {
            color: '#d1d3da',
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: `1px solid #48494e !important`,
          },
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: `1px solid #48494e !important`,
          },
          '& .MuiDataGrid-columnSeparator': {
            visibility: 'hidden',
          },
        }}
      >
        <DataGrid
          columnHeaderHeight={25}
          rowHeight={35}
          hideFooter={true}
          rows={data || []}
          columns={productColumns}
        />
      </Box>
    </div>
  )
}

export default ProductsList
