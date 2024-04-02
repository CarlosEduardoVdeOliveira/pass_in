import { Search, MoreHorizontal, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { IconButton } from "./icon-button";
import dayjs from "dayjs";
import "dayjs/locale/pt-br"
import relativeTime from "dayjs/plugin/relativeTime";
import { Table } from "./table/table";
import TableHeader from "./table/table-header";
import TableCell from "./table/table-cell";
import TableRow from "./table/table-row";
import { ChangeEvent, useState } from "react";
import { attendees } from "../data/attendees";
dayjs.extend(relativeTime);
dayjs.locale('pt-br');
export function AttendeeList(){
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  function onSearchInputChanged(event:ChangeEvent<HTMLInputElement>){
    setSearchValue(event.target.value)
  }
  return(
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className=" w-72 px-3 py-1.5 border border-white/10 rounded-lg flex items-center gap-3 text-sm">
          <Search className="size-4 text-emerald-300" />
          <input onChange={onSearchInputChanged} className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" type="search" placeholder="Buscar participante..."  />
          {searchValue}
        </div>
      </div>
      <Table className="border border-white/10 rounded-lg ">
          <thead>
            <tr className="border border-white/10">
              <TableHeader style={{width:48}} >
                <input className="size-4 border bg-black/20 border-white/10 rounded" type="checkbox" />
              </TableHeader>
              <TableHeader >Código</TableHeader>
              <TableHeader >Participante</TableHeader>
              <TableHeader >Data da inscrição</TableHeader>
              <TableHeader >Data do check-in</TableHeader>
              <TableHeader style={{width:64}} ></TableHeader>
            </tr>
          </thead>
          <tbody>
            {attendees.slice((page - 1)*10, page*10).map((attendee)=>{
              return(
              <TableRow key={attendee.id} className="border border-white/10">
                <TableCell>
                  <input className="size-4 border bg-black/20 border-white/10 rounded" type="checkbox" />
                </TableCell>
                <TableCell>{attendee.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-semibold">{attendee.name}</span>
                    <span>{attendee.email}</span>
                  </div>
                </TableCell>
                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
                <TableCell>
                  <IconButton transparent={true}>
                    <MoreHorizontal className="size-4"/>
                  </IconButton>
                </TableCell>
            </TableRow>)
            })}
          </tbody>
          <tfoot>
            <TableRow>
              <TableCell colSpan={3}>
                Mostrando 10 de {attendees.length} items
              </TableCell>
              <TableCell className="text-right" colSpan={3}>
                <div className="inline-flex items-center gap-8">
                  <span>Pagina {page} de {Math.ceil(attendees.length/10)}</span>
                  <div className="flex gap-1.5">
                    <IconButton>
                      <ChevronsLeft className="size-4"/>
                    </IconButton>
                    <IconButton>
                      <ChevronLeft className="size-4"/>
                    </IconButton>
                    <IconButton>
                      <ChevronRight className="size-4"/>
                    </IconButton>
                    <IconButton>
                      <ChevronsRight className="size-4"/>
                    </IconButton>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </tfoot>
      </Table>
    </div>
  );
}