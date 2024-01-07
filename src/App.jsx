import "./App.css";
import { ContactForm } from "./components/ContactForm";
import { CrudApi } from "./components/CrudApi";
import { Modals } from "./components/Modals";

function App() {
  return (
    <>
      <Modals />
      <hr />
      <ContactForm />
    </>
  );
}

export default App;
