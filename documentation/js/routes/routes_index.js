var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","canActivate":["CheckLoginGuard"],"loadChildren":"./pages/pages.module#PagesModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/shared/layout/layout-default/layout-default.module.ts","module":"LayoutDefaultModule","children":[{"path":"","component":"LayoutDefaultComponent"}],"kind":"module"},{"name":"routes","filename":"src/app/pages/pages-routing.module.ts","module":"PagesRoutingModule","children":[{"path":"","component":"LayoutDefaultComponent","canActivate":["CheckLoginGuard"],"children":[{"path":"home","component":"SubscribersComponent","canActivate":["CheckLoginGuard"]}]}],"kind":"module"}],"module":"PagesModule"}]},{"path":"login","loadChildren":"./pages/login/login.module#LoginModule"},{"path":"**","redirectTo":"home"}],"kind":"module"},{"name":"routes","filename":"src/app/pages/login/login.module.ts","module":"LoginModule","children":[{"path":"","component":"LoginComponent"}],"kind":"module"}]}