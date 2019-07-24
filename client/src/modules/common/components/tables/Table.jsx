import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
}

const TableWrapper = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: separate;
  border-spacing: 0rem .75rem;
`
export const TableHeader = styled.thead`
`
export const TableHeaderRow = styled.tr`
`
export const TableHeaderCell = styled.th`
  padding: 0 1rem;
  text-align: ${({ align }) => align};
  text-transform: uppercase;
  font-weight: lighter;
  font-size: ${({ theme }) => theme.smallFontSize};
`
export const TableBody = styled.tbody`
`
export const TableBodyRow = styled.tr`
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: ${({ theme }) => theme.border};
`
export const TableBodyCell = styled.td`
  padding: 1rem;
  background: ${({ theme }) => theme.backgroundColor};
  text-align: ${({ align }) => align};
`

export default function Table({ headers, rows }) {
  return (
    <TableWrapper>
      <TableHeader>
        <TableHeaderRow>
          {
            headers.map((header, index) => (
              <TableHeaderCell key={`header-${index}`} {...header.options}>
                {header.options.hideHeader ? null : header.title}
              </TableHeaderCell>
            ))
          }
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {
          rows.map((row, index) => (
            <TableBodyRow key={`row-${index}`}>
              {
                headers.map(header =>(
                  <TableBodyCell key={`row-${index}-${header.field}`} {...header.options}>
                    {header.options.formatField ? header.options.formatField(row[header.field]) : row[header.field]}
                  </TableBodyCell>
                ))
              }
            </TableBodyRow>
          ))
        }
      </TableBody>
    </TableWrapper>
  )
}
