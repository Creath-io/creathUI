import { Routes, Route } from "react-router-dom";
import DescriptionPage from "./DescriptionPage";


export default function PagesRoutes() {
  return (
    <Route>
      <Route
        path="/marketplace/:key"
        element={<DescriptionPage/>}
      />
    </Route>
  );
}
