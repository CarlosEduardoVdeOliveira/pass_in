import { ComponentProps } from "react";

interface TableProps extends ComponentProps<"table">{}

export function Table(props: TableProps) {
  return (
    <div>table</div>
  )
}
