import Footer from "./Footer";
import Header from "./Header";
import MainBody from "./MainBody";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ListView from "./views/ListView";
import AddView from "./views/AddView";

function App() {
  return (
    <>
    
      <Header />
        <Routes>
            <Route index element={<MainBody />} />
            <Route path="/list" element={<ListView />} />
            <Route path="/add" element={<AddView />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
