import Main from "./Main/Main";
import CalendarPage from "./Calendar/Calendar";
import NotesPage from "./Notes/Notes";
import CalorieTrack from "./Calorie/Calorie";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";



export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/calorie" element={<CalorieTrack />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
