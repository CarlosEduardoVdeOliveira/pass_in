
export function AttendeeList(){
  return(
    <div className="flex items-center gap-3">
      <h1 className="text-2xl font-bold">Participantes</h1>
      <div className=" w-72 px-3 py-1.5 border border-white/10 rounded-lg flex items-center text-sm">
        icon
        <input className="bg-transparent flex-1 outline-none" type="search" placeholder="Buscar participante..."  />
      </div>
    </div>
  );
}