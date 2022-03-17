import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Router }  from "./Components/Router/Router";
import { store, persistor } from "./Store";

const App = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
    <Router />
    </PersistGate>
    </Provider> 
     );
export default App;