import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/header";

export function App() {
  return( 
    <div className="max-w-1280">
      <Header />
      <AttendeeList />
    </div>
  );
}
