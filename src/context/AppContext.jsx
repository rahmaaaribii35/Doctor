import { createContext } from "react";
import { doctors } from "../assets/assets"; // Njibou doctors men fichier assets (data elli bech n'partagouha)
import { patients } from "../assets2/assets2"; // Njibou patients men fichier assets2


// Naamlou context yeli houwa i3awedh props besh isaheli l'accès lel data fil app kamla
// AppContext howa elli bech ykoun boîte mta3 data fel app
export const AppContext = createContext();



// Hedha el provider : howa elli yhezz el data w y3atiha lel app kolha
const AppContextProvider = ({ children }) => {


    // Hne nhottou el data elli 7achetna n'partagouha men assets.js
  const value = {
    doctors,
    patients,
  };

  // Hne n7ottou value bch kol composant fi west AppContextProvider . inajem ya9ra el data direct b useContext(AppContext)
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
