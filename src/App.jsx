import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

import { WeatherProvider } from "./provider";

export default function App() {
  return (
    <div
      className="bg-body font-[Roboto] text-light h-screen grid place-items-center"
      style={{
        backgroundImage: "url('src/assets/body-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <WeatherProvider>
        <Header />
        <Dashboard />
      </WeatherProvider>
    </div>
  );
}
