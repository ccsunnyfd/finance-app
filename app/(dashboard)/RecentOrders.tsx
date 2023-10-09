'use client'

import BoxHeader from './components/BoxHeader'
import { GetTransactionsResponse } from '../transaction/types'
import { Box } from '@mui/material'
import { DataGrid, type GridCellParams } from '@mui/x-data-grid'

const transactionColumns = [
  {
    field: '_id',
    headerName: 'id',
    flex: 1,
  },
  {
    field: 'buyer',
    headerName: 'Buyer',
    flex: 0.67,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    flex: 0.35,
    renderCell: (params: GridCellParams) => `$${params.value}`,
  },
  {
    field: 'productIds',
    headerName: 'Count',
    flex: 0.1,
    renderCell: (params: GridCellParams) =>
      (params.value as Array<string>).length,
  },
]

type Props = {
  data: GetTransactionsResponse[]
}

const RecentOrders = ({ data }: Props) => {
  return (
    <div className="h-full w-full">
      <BoxHeader
        title="Recent Orders"
        sideText={`${data?.length} latest transactions`}
      />
      <Box
        mt="1rem"
        p="0 0.5rem"
        height="80%"
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
          columns={transactionColumns}
        />
      </Box>
    </div>
  )
}

export default RecentOrders
