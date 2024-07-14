import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./routes";
import { LightTheme } from "./shared/themes";


export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
    </ThemeProvider>
  );
}
