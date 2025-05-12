import "./App.css";
import Facial from "./pages/facial";
import Header from "./pages/header/index";
import Massage from "./pages/massage";
import Relaxation from "./pages/relax";
import Scrub from "./pages/scrub";
import Spolight from "./pages/spotlight/index";
import Wellness from "./pages/wellness";

function App() {
  return (
    <>
      <Header />
      <Spolight />
      <Wellness />
      <Massage />
      <Relaxation />
      <Scrub />
      <Facial />
    </>
  );
}

export default App;
