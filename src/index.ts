import { Component } from "./service/Component";
import { renderDOM } from "./utils/renderDOM";
import Page404 from "./pages/404/404";
import Page500 from "./pages/500/500";
import Main from "./pages/Main";
import Auth from "./pages/auth/Auth";
import Registration from "./pages/registration/Registration";

const pages: Record<string, Component> = {
    '/': new Main({}),
    '/404': new Page404(),
    '/500': new Page500(),
    '/auth': new Auth(),
    '/registration': new Registration(),
};

const carentPath = window.location.pathname;

renderDOM('#app', pages[carentPath])
