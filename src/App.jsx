import "./App.css";
import { ContactForm } from "./components/ContactForm";
import { CrudApi } from "./components/CrudApi";
import { Modals } from "./components/Modals";
import { CrudProvider } from "./context/CrudContext";

function App() {
  return (
    <>
      <CrudProvider>
        <CrudApi />
      </CrudProvider>
    </>
  );
}

export default App;
