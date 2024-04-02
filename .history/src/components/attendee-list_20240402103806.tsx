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
      <div className="border border-white/10 rounded-lg ">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-3 py-2"><input type="checkbox" /></th>
              <th className="px-3 py-2">Código</th>
              <th className="px-3 py-2">Participante</th>
              <th className="px-3 py-2">Data da inscrição</th>
              <th className="px-3 py-2">Data do check-in</th>
              <th className="px-3 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>52716</td>
              <td><span>Diego Schell Fernandes</span> <span>diego.schell.f@gmail.com</span></td>
              <td>7 days ago</td>
              <td>7 days ago</td>
              <td></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>
                Showing 10 of 228 items
              </td>
              <td colSpan={3}>
                Page 1 of 11
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}