import { Courses } from "./components/Courses";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="bg-snow h-screen w-screen">
      <Header />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
