import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import CustomerTable from "./components/CustomerTable";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Sidebar />

      <main className="main-content">

        <Header />

        <Stats />

        <CustomerTable />

      </main>

    </div>
  );
}

export default App;