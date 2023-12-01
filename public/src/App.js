import SnapShort from "./Snapshot";
import Beaches from "./Beaches";
import {Routes,Route} from "react-router-dom";
import Mountains from "./Mountains";
import Navbar from "./Navlink";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<SnapShort />}/>
        <Route path="/beaches" element={< Beaches />} />
        <Route path="/mountains" element={<Mountains />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}


export default App;
