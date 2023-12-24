import { Outlet } from "react-router-dom";

import Mouse from "../components/Mouse";
import Up from "../components/Up";

export const Main = () => (
<>    
  <main className="main">

    <Outlet />

    <Mouse />

    <Up />

  </main>
</>
);