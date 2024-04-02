import { Search } from "lucide-react";
export function AttendeeList(){
  return(
    <div>
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className=" w-72 px-3 py-1.5 border border-white/10 rounded-lg flex items-center gap-3 text-sm">
          <Search className="size-4 text-emerald-300" />
          <input className="bg-transparent flex-1 outline-none" type="search" placeholder="Buscar participante..."  />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Código</th>
            <th>Participante</th>
            <th>Data da inscrição</th>
            <th>Data do check-in</th>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  );
}