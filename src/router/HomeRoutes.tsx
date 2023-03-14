import { Home } from "../componets/pages/Home";
import { Page404 } from "../componets/pages/Page404";
import { Setting } from "../componets/pages/Setting";
import { UserManagement } from "../componets/pages/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    chidlren: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    chidlren: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    chidlren: <Setting />
  },
  {
    path: "*",
    exact: false,
    chidlren: <Page404 />
  }
];
