import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";


export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
    </AppThemeProvider>
  );
}
