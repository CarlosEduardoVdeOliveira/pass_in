import {ComponentProps} from 'react'

interface TableCellProps extends ComponentProps<'td'>{}
export default function TableCell({...props}: TableCellProps) {
  return (
    <div></div>
  )
}
