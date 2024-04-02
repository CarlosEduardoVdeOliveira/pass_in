import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<"th">{}

export default function TableHeader(props: TableHeaderProps) {
  return (
    <div>table-header</div>
  )
}
