import { About } from "./components/about/About";
import AnimateBg from "./components/animation/AnimateBg";
import Form from "./components/contact/Form";
import { Footer } from "./components/footer/Footer";
import { Home } from "./components/home/Home";
import { Nav } from "./components/navegation/Nav";
import { Service } from "./components/services/Service";
import { Skill } from "./components/skill/Skill";
import { Work } from "./components/work/Work";
import "./index.css";
function App() {
  return (
    <main className={`   bg-fixed  `}>
      <AnimateBg />
      <Nav />
      <Home />
      <About />
      <Service />
      <Skill />
      <Work />
      <Form />
      <Footer />
    </main>
  );
}

export default App;
