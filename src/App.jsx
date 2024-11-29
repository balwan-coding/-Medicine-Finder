import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import MedicineListPage from "./MedicineListPage";
import Navbar from "./Navbar";
import MedicineDeatailCart from "./MedicineDeatailCart";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<MedicineListPage />}></Route>
        <Route
          path="/MedicineDeatailCart/:id/"
          element={<MedicineDeatailCart />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
