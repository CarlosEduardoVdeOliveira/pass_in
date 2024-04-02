import { Search, MoreHorizontal } from "lucide-react";
export function AttendeeList(){
  return(
    <div className="flex flex-col gap-4">
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
            <tr className="border border-white/10">
              <th className="px-4 py-3 text-sm font-semibold text-left">
                <input className="border border-white/10 bg-transparent" type="checkbox" />
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-left">Código</th>
              <th className="px-4 py-3 text-sm font-semibold text-left">Participante</th>
              <th className="px-4 py-3 text-sm font-semibold text-left">Data da inscrição</th>
              <th className="px-4 py-3 text-sm font-semibold text-left">Data do check-in</th>
              <th className="px-4 py-3 text-sm font-semibold text-left"></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({length: 8}).map((_, i)=>{
              return(<tr key={i} className="border border-white/10">
              <td className="px-4 py-3 text-sm text-zinc-300">
                <input className="border border-white/10 bg-transparent" type="checkbox" />
              </td>
              <td className="px-4 py-3 text-sm text-zinc-300">52716</td>
              <td className="px-4 py-3 text-sm text-zinc-300">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-semibold">Diego Schell Fernandes</span>
                  <span>diego.schell.f@gmail.com</span>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-zinc-300">7 days ago</td>
              <td className="px-4 py-3 text-sm text-zinc-300">7 days ago</td>
              <td className="px-4 py-3 text-sm text-zinc-300">
                <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                  <MoreHorizontal className="size-4"/>
                </button>
              </td>
            </tr>)
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="px-4 py-3 text-sm text-zinc-300" colSpan={3}>
                Showing 10 of 228 items
              </td>
              <td className="px-4 py-3 text-sm text-zinc-300 text-right" colSpan={3}>
                Page 1 of 11
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}