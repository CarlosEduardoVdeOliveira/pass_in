
export function AttendeeList(){
  return(
    <div className="flex gap-4">
      <h1 className="text-2xl font-bold">Participantes</h1>
      <input type="search" placeholder="Buscar participante..." className="px-3 py-1.5" />
    </div>
  );
}