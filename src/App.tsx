import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./routes";


export const App = () => {
  return (
    <BrowserRouter>
      <AppRoute/>
    </BrowserRouter>
  );
}
