import React, { useState } from 'react';
import { kaReducer, Table } from 'ka-table';// useTable
import { closeRowEditors, openRowEditors, saveRowEditors } from 'ka-table/actionCreators';
import { DataType, PagingPosition } from 'ka-table/enums';
import { search } from 'ka-table/actionCreators';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../helpers/themes';
import '../../styles/Sell.css'

const dataArray = Array(119)
  .fill(undefined)
  .map((_, index) => ({
    Bill: 'Mike Wazowski',
    Code: 80 + index,
    Total_amount: 10.00 + (0.10*index),
    Product_lot: 'L15-3293292'+index.toString(),
    Quantity: 10,
    Unit_price: 10.10,
    id: index,
  }));

const EditButton = ({
  dispatch, rowKeyValue
}) => {
  return (
   <div className='edit-cell-button'>
     <img
      src='https://komarovalexander.github.io/ka-table/static/icons/edit.svg'
      alt='Edit Row'
      title='Edit Row'
      onClick={() => dispatch(openRowEditors(rowKeyValue))}
    />
   </div>
  );
};

const SaveButton = ({
  dispatch, rowKeyValue
}) => {
  return (
    <div className='buttons'
      style={{display: 'flex', justifyContent: 'space-between'}} >
      <img
        src='https://komarovalexander.github.io/ka-table/static/icons/save.svg'
        className='save-cell-button'
        alt='Save'
        title='Save'
        onClick={() => {
          dispatch(saveRowEditors(rowKeyValue, {
            validate: true,
          }));
        }}
      />
      <img
        src='https://komarovalexander.github.io/ka-table/static/icons/close.svg'
        className='close-cell-button'
        alt='Cancel'
        title='Cancel'
        onClick={() => {
          dispatch(closeRowEditors(rowKeyValue));
        }}
      />
   </div >
 );
};

const tablePropsInit = {
  columns: [
    { key: 'Bill',         title: 'Bill',             dataType: DataType.String, style:{ maxWidth: 150, height: 35 } },
    { key: 'Code',         title: 'Product code',     dataType: DataType.Number, style:{ maxWidth: 130, height: 35 } },
    { key: 'Total_amount', title: 'Total amount - $', dataType: DataType.Number, style:{ maxWidth: 150, height: 35 } },
    { key: 'Product_lot',  title: 'Product lot',      dataType: DataType.String, style:{ maxWidth: 150, height: 35 } },
    { key: 'Quantity',     title: 'Quantity - kg',    dataType: DataType.Number, style:{ maxWidth: 150, height: 35 } },
    { key: 'Unit_price',   title: 'Unit price - $',   dataType: DataType.Number, style:{ maxWidth: 150, height: 35 } },
    { key: 'editColumn',   title: 'Action', style: { width: 150 } },
  ],
  data: dataArray,
  search: ({ searchText, rowData, column }) => {
    if (column.key === 'passed'){
      return (searchText === 'false' && !rowData.passed) || (searchText === 'true' && rowData.passed);
    }
  },
  rowKeyField: 'id',
  paging: {
    enabled: true,
    pageIndex: 0,
    pageSize: 25,
    pageSizes: [25, 50, 75],
    position: PagingPosition.Bottom
  },
};

const SellPage = () => {
  // const table = useTable();
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const dispatch = (action) => {
    changeTableProps((prevState) => kaReducer(prevState, action));
  };
  return(
    <div id='Sell'>
      <ThemeProvider theme={theme}>
      <h1 className='title'>Products sold</h1>
        <div className='table'>
        <div className='tablecomponents'>
          <TextField 
            id="outlined-basic"
            type='search'
            label="search"
            variant="filled"
            className='search'
            defaultValue={tableProps.searchText}
            onChange={(event) => {
              dispatch(search(event.currentTarget.value));
            }}
          />
        </div>
        <Table
          width='100%!'
          height='100%!'
          {...tableProps}
          childComponents={{
            cellText: {
              content: (props) => {
                if (props.column.key === 'editColumn'){
                  return <EditButton {...props}/>
                }
              }
            },
            cellEditor: {
              content: (props) => {
                if (props.column.key === 'editColumn'){
                  return <SaveButton {...props}/>
                }
              }
            },
            noDataRow: {
              content: () => {
                return <label id='noData'>'No Data Found'</label>
              }
            },
          }}
          dispatch={dispatch}
        />
      </div>
      <footer></footer>
      </ThemeProvider>
    </div>
  )
}

export default SellPage
