import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import MemberContainer from "./components/list/membersContainer";
import MemberDetail from "./components/list/memberDetail";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<MemberContainer />} />
          <Route path="/detail/:id" element={<MemberDetail />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
