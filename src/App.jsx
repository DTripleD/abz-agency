import "./App.scss";

import Header from "components/Header/Header";

import HeroSection from "components/HeroSection/HeroSection";
import UsersSection from "components/UsersSection/UsersSection";
import FormSection from "components/FormSection/FormSection";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getToken } from "./redux/users/usersOperations";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "./helpers/toastOptions";

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
