import "./App.css";
import desktopBgScreen from "./assets/bg-main-desktop.png";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-row max-sm:flex-col">
      <div className="main-container">
        <img className="h-screen max-sm:w-screen" src={desktopBgScreen} />
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col m-0 gap-3 w-1/2 max-sm:w-3/4 max-sm:py-10">
          <Input placeholder="Card Holder Name" label="Card Holder Name" />
          <Input placeholder="Card Number" label="Card Number" />
          <div className="flex gap-3 items-end">
            <Input placeholder="MM" label="EXP. Date(MM/YY)" />
            <Input placeholder="YY" hideLabel={true} />
            <Input placeholder="CVC" label="CVC" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
