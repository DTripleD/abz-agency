import "./App.scss";

import Header from "components/Header/Header";

import HeroSection from "components/HeroSection/HeroSection";
import UsersSection from "components/UsersSection/UsersSection";
import FormSection from "components/FormSection/FormSection";

function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <UsersSection />
        <FormSection />
      </main>
    </div>
  );
}

export default App;
