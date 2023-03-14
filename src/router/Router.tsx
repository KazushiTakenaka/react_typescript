import { memo, FC } from "react";
import { Route, Switch } from "react-router-dom";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../componets/pages/Page404";
import { HeaderLayout } from "../componets/templates/HeaderLayout";

import { Login } from "../componets/pages/Login";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <HeaderLayout>{route.chidlren}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
