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
  const [page, setPage] = useState(()=>{
    const url = new URL(window.location.toString())
    if (url.searchParams.has('page')) {
      return Number(url.searchParams.get(page))
    }
  });
  
  const [total, setTotal] = useState(0);
  const [attendees, setAttendees] = useState<Attendees[]>([]);
  
  useEffect(()=>{
    const url = new URL('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees')
    url.searchParams.set("pageIndex", String(page-1))
    if (searchValue.length > 0) {
      url.searchParams.set("query", searchValue)
    }
    
    fetch(url)
    .then((response)=>response.json())
    .then((data)=> {
      setAttendees(data.attendees)
      setTotal(data.total)
    })
  },[page, searchValue])
  function setCurrentPage(page:number){
    const url = new URL(window.location.toString())
    url.searchParams.set('page', String(page))
    window.history.pushState({}, "", url)
  }
  const totalPages = Math.ceil(total/10);
  function onSearchInputChanged(event:ChangeEvent<HTMLInputElement>){
    setSearchValue(event.target.value)
    setPage(1)
  }
  function goToFirstPage(){
    setCurrentPage(1)
  }
  function goToPreviousPage(){
    setCurrentPage(page-1)
  }

  function goToNextPage(){
    setCurrentPage(page+1)
  }
  function goToLastPage(){
    setCurrentPage(totalPages)
  }
  return(
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className=" w-72 px-3 py-1.5 border border-white/10 rounded-lg flex items-center gap-3 text-sm">
          <Search className="size-4 text-emerald-300" />
          <input onChange={onSearchInputChanged} className="bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0" type="search" placeholder="Buscar participante..."  />
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