import FAQ from "./pages/FAQ";
import Features from "./pages/Features";
import Footer from "./pages/Footer";
import Form from "./pages/Form";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Work from "./pages/Work";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Main />
        <Work />
        <Projects />
        <Features />
        <Testimonials />
        <FAQ />
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default App;
