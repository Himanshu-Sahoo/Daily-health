import Navbar from "./components/Navbar"
import AppointmentsDashboard from "./components/ApmtDashboard";
import AppointmentPrompt from './components/ApmtPrompt';
import MyAppointments from "./components/MyAppointment";
import DoctorTabs from "./components/DoctorTabs";
import BookApmt from "./components/BookApmt";
import AppointmentDetails from "./components/ApmtDetails";
import ConsultationPayment from "./components/ConsultationPay";
// import './App.css'

function App() {
  
  return (
    <>
    <Navbar/>
    {/* <AppointmentsDashboard/>
    <AppointmentPrompt/> */}
    <MyAppointments/>
    {/* <DoctorTabs/> */}
      {/* <BookApmt/> */}
      <AppointmentDetails/>
      {/* <ConsultationPayment/> */}
    </>
  )
}

export default App
