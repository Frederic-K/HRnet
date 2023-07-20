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

import Header from '../../components/Header/Header'
import mockedEmployeesDatas from '../../mockedEmployeesDatas/MOCK_DATA-id.json'
import { useRef, useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userSelector, clearState } from '../../features/userSlice'
import { employeeSelector } from '../../features/employeeSlice'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'

export default function ManageEmployees() {
  const [order, setOrder] = useState('asc')
  // const [orderBy, setOrderBy] = useState('firstName')
  const [orderBy, setOrderBy] = useState('employeeID')
  const [selected, setSelected] = useState([])
  const [page, setPage] = useState(0)
  const [dense, setDense] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useSelector(userSelector)
  const { employees } = useSelector(employeeSelector)
  const searchInput = useRef()
  const [rows, setRows] = useState(mockedEmployeesDatas)
  const [filteredEmployees, setFilteredEmployees] = useState([])

  //console.log('employees', employees)
  // console.log('selected', selected)

  useEffect(() => {
    if (!id) {
      dispatch(clearState())
      navigate('/')
    }
    // eslint-disable-next-line
  }, [id])

  useEffect(() => {
    if (filteredEmployees.length > 0) {
      setRows(filteredEmployees)
      toast.success(`Show results ${filteredEmployees.length}`)
      // console.log('rows', rows)
    } else {
      setRows(mockedEmployeesDatas)
      toast.error('No results')
      // console.log('rows-2', rows)
    }
  }, [filteredEmployees])

  function Debounce(func, timeout = 2000) {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, timeout)
    }
  }

  const processChanges = Debounce(() => Filter())

  function Filter() {
    let inputSearchValue = searchInput.current.value.toLowerCase()
    if (inputSearchValue !== '') {
      const filteredEmployees = mockedEmployeesDatas.filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(inputSearchValue) ||
          employee.lastName.toLowerCase().includes(inputSearchValue) ||
          employee.startDate.toLowerCase().includes(inputSearchValue) ||
          employee.department.toLowerCase().includes(inputSearchValue) ||
          employee.dateOfBirth.toLowerCase().includes(inputSearchValue) ||
          employee.street.toLowerCase().includes(inputSearchValue) ||
          employee.city.toLowerCase().includes(inputSearchValue) ||
          employee.state.toLowerCase().includes(inputSearchValue) ||
          employee.zipCode.toString().includes(inputSearchValue),
      )
      setFilteredEmployees(filteredEmployees)
      // console.log('filteredEmployees', filteredEmployees)
    } else {
      setFilteredEmployees(mockedEmployeesDatas)
    }
    return filteredEmployees
  }
  // console.log('filteredEmployees-outofthebox', filteredEmployees)

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1
    }
    if (b[orderBy] > a[orderBy]) {
      return 1
    }
    return 0
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy)
  }

  // Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
  // stableSort() brings sort stability to non-modern browsers (notably IE11). If you
  // only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
  // with exampleArray.slice().sort(exampleComparator)
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) {
        return order
      }
      return a[1] - b[1]
    })
    return stabilizedThis.map((el) => el[0])
  }

  const headCells = [
    {
      id: 'firstName',
      numeric: false,
      disablePadding: false,
      label: 'First Name',
    },
    {
      id: 'lastName',
      numeric: false,
      disablePadding: false,
      label: 'Last Name',
    },

    {
      id: 'startDate',
      numeric: false,
      disablePadding: false,
      label: 'Start Date',
    },
    {
      id: 'department',
      numeric: false,
      disablePadding: false,
      label: 'Department',
    },
    {
      id: 'dateOfBirth',
      numeric: false,
      disablePadding: false,
      label: 'Birth Date',
    },
    {
      id: 'street',
      numeric: false,
      disablePadding: false,
      label: 'Street',
    },
    {
      id: 'city',
      numeric: false,
      disablePadding: false,
      label: 'City',
    },
    {
      id: 'state',
      numeric: false,
      disablePadding: false,
      label: 'State',
    },
    {
      id: 'zipCode',
      numeric: false,
      disablePadding: false,
      label: 'Zip Code',
    },
  ]

  function EnhancedTableHead(props) {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort,
    } = props
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property)
    }

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    )
  }

  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  }

  function EnhancedTableToolbar(props) {
    const { numSelected } = props

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity,
              ),
          }),
        }}
        className="manageEmployees__table--bg"
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Employees
          </Typography>
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton
              onClick={() => {
                handleDeleteClick()
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton
              onClick={() => {
                handleFilterClick()
              }}
            >
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    )
  }

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.employeeID)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (event, employeeID) => {
    const selectedIndex = selected.indexOf(employeeID)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, employeeID)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }

    setSelected(newSelected)
  }
  const [isFilterShown, setIsFilterShown] = useState(false)
  const handleFilterClick = () => {
    setIsFilterShown(!isFilterShown)
    console.log('handleFilterClick', isFilterShown)
  }

  const handleDeleteClick = () => {
    let undeleteRows = rows.filter((el) => !selected.includes(el.employeeID))
    // console.log('returnDeleteRows', undeleteRows)
    setRows(undeleteRows)
    setSelected([])
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangeDense = (event) => {
    setDense(event.target.checked)
  }

  const isSelected = (employeeID) => selected.indexOf(employeeID) !== -1

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    // eslint-disable-next-line
    [order, orderBy, page, rowsPerPage, rows],
  )

  return (
    <>
      <Toaster />
      <header className="layout__header">
        <Header />
      </header>
      <section className="manageEmployees__banner">
        <div className="manageEmployees__banner--title">List of employees</div>
      </section>
      <main className="manageEmployees__container">
        {isFilterShown ? (
          <div className="manageEmployees__search">
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              fullWidth
              inputRef={searchInput}
              onChange={() => {
                processChanges()
              }}
            />
          </div>
        ) : null}
        {/* // <div className="manageEmployees__search">
        //   <TextField
        //     id="outlined-basic"
        //     label="Search"
        //     variant="outlined"
        //     fullWidth
        //     inputRef={searchInput}
        //     onChange={() => {
        //       processChanges()
        //     }}
        //   />
        // </div> */}
        <div className="manageEmployees__table">
          <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
              <EnhancedTableToolbar numSelected={selected.length} />
              <TableContainer>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={dense ? 'small' : 'medium'}
                  className="manageEmployees__table--bg"
                >
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                  />
                  <TableBody>
                    {visibleRows.map((row, index) => {
                      const isItemSelected = isSelected(row.employeeID)
                      const labelId = `enhanced-table-checkbox-${index}`

                      return (
                        <TableRow
                          hover
                          onClick={(event) =>
                            handleClick(event, row.employeeID)
                          }
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.employeeID}
                          selected={isItemSelected}
                          sx={{ cursor: 'pointer' }}
                          className="manageEmployees__table--bg"
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                'aria-labelledby': labelId,
                              }}
                            />
                          </TableCell>
                          <TableCell align="left">{row.firstName}</TableCell>
                          <TableCell align="left">{row.lastName}</TableCell>
                          <TableCell align="left">{row.startDate}</TableCell>
                          <TableCell align="left">{row.department}</TableCell>
                          <TableCell align="left">{row.dateOfBirth}</TableCell>
                          <TableCell align="left">{row.street}</TableCell>
                          <TableCell align="left">{row.city}</TableCell>
                          <TableCell align="left">{row.state}</TableCell>
                          <TableCell align="left">{row.zipCode}</TableCell>
                        </TableRow>
                      )
                    })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: (dense ? 33 : 53) * emptyRows,
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                className="manageEmployees__table--bg"
              />
            </Paper>
            <FormControlLabel
              control={<Switch checked={dense} onChange={handleChangeDense} />}
              label="Dense padding"
            />
          </Box>
        </div>
      </main>
    </>
  )
}
