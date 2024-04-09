import "./App.scss";

import Header from "components/Header/Header";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getToken } from "./redux/users/usersOperations";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "./helpers/toastOptions";

import HeroSection from "src/modules/HeroSection/HeroSection";
import UsersSection from "src/modules/UserSection/UsersSection";
import FormSection from "src/modules/FormSection/FormSection";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToken());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <UsersSection />
        <FormSection />
      </main>
      <Toaster toastOptions={toastOptions} />
    </div>
  );
}

export default App;
