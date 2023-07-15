import Header from '../../components/Header/Header'

// export default function ManageEmployees() {
//   return (
//     <>
//       <div className="manageEmployees__header">
//         <Header />
//       </div>
//       <main></main>
//     </>
//   )
// }

import * as React from 'react'
import PropTypes from 'prop-types'
import { alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import DeleteIcon from '@mui/icons-material/Delete'
import FilterListIcon from '@mui/icons-material/FilterList'
import { visuallyHidden } from '@mui/utils'

import TextField from '@mui/material/TextField'

import { useState } from 'react'

import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid'

export default function ManageEmployees() {
  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ]

  const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ]

  return (
    <>
      <header className="layout__header">
        <Header />
      </header>
      <section className="manageEmployees__banner">
        <div className="manageEmployees__banner--title">List of employees</div>
      </section>
      <main className="manageEmployees__container">
        <div style={{ height: 400, width: '100%' }}>
          {/* <DataGrid rows={rows} columns={columns} slots={{ toolbar: GridToolbar }} /> */}
          <DataGrid
            rows={rows}
            columns={columns}
            slots={{ toolbar: GridToolbarQuickFilter }}
          />
        </div>
      </main>
    </>
  )
}
