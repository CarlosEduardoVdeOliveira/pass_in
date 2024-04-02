
export function AttendeeList(){
  return(
    <div className="flex items-center gap-3">
      <h1 className="text-2xl font-bold">Participantes</h1>
      <input type="search" placeholder="Buscar participante..." className=" w-72px-3 py-1.5
      border border-white/10 rounded-lg bg-transparent text-sm" />
    </div>
  );
}