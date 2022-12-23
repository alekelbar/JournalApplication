import { ThemeConfig } from "./config/theme.config";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeConfig>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeConfig>
    </Provider>
  );
}

export default App;
