import { Search, MoreHorizontal, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { IconButton } from "./icon-button";
import dayjs from "dayjs";
import "dayjs/locale/pt-br"
import relativeTime from "dayjs/plugin/relativeTime";
import { Table } from "./table/table";
import TableHeader from "./table/table-header";
import TableCell from "./table/table-cell";
import TableRow from "./table/table-row";
import { ChangeEvent, useEffect, useState } from "react";
dayjs.extend(relativeTime);
dayjs.locale('pt-br');
interface Attendees{
  id: string,
  name: string,
  email: string,
  createdAt:string,
  checkedInAt: string | null
}
export function AttendeeList(){
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [page, setPage] = useState(1);
  const [attendees, setAttendees] = useState<Attendees[]>([]);
  
  useEffect(()=>{
    fetch('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33')
    .then((response)=>response.json())
    .then((data)=> setAttendees(data.attendees))
  },[page])
  const totalPages = Math.ceil(attendees.length/10);
  function onSearchInputChanged(event:ChangeEvent<HTMLInputElement>){
    setSearchValue(event.target.value)
  }
  
  function goToFirstPage(){
    setPage(1)
  }
  function goToPreviousPage(){
    setPage(page-1)
  }

  function goToNextPage(){
    setPage(page+1)
  }
  function goToLastPage(){
    setPage(totalPages)
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
            {attendees.map((attendee)=>{
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
                <TableCell>{attendee.checkedInAt === null 
                  ? <span className="text-zinc-400">Não fez check-in</span>
                  : dayjs().to(attendee.checkedInAt)}</TableCell>
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
                  <span>Pagina {page} de {totalPages}</span>
                  <div className="flex gap-1.5">
                    <IconButton onClick={goToFirstPage} disabled={page === 1}>
                      <ChevronsLeft className="size-4"/>
                    </IconButton>
                    <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                      <ChevronLeft className="size-4"/>
                    </IconButton>
                    <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                      <ChevronRight className="size-4"/>
                    </IconButton>
                    <IconButton onClick={goToLastPage} disabled={page === totalPages}>
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