import { Component } from "./service/Component";
import { renderDOM } from "./utils/renderDOM";
import Page404 from "./pages/404/404";
import Page500 from "./pages/500/500";
import Auth from "./pages/auth/Auth";
import Main from "./pages/main1/Main";
import Registration from "./pages/registration/Registration";
import Profile from "./pages/profile";
import { Chat } from "./pages/chat";

const pages: Record<string, Component> = {
    '/': new Main({}),
    '/404': new Page404(),
    '/500': new Page500(),
    '/auth': new Auth(),
    '/registration': new Registration(),
    '/profile': new Profile(),
    '/chat': new Chat(),
};

const carentPath = window.location.pathname;

renderDOM('#app', pages[carentPath])
