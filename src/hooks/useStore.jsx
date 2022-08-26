import store from "config/SetupReduxStore";
import { useContext } from "react";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const useStore = () => {
  return useContext(StoreContext);
};

export default useStore;
