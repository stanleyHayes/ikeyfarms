import React from "react";
import {Switch, Route} from "react-router-dom";
import ScrollToTop from "./components/shared/scroll-to-top";
import HomePage from "./pages/home/home-page";
import AboutPage from "./pages/about/about-page";
import MediaPage from "./pages/media/media-page";
import CareersPage from "./pages/careers/careers-page";
import ProductsPage from "./pages/products/products-page";
import ProjectsPage from "./pages/projects/projects-page";
import ContactPage from "./pages/contact/contact-page";

function App() {
    return (
        <ScrollToTop>
            <Switch>
                <Route exact={true} path="/">
                    <HomePage />
                </Route>
                <Route exact={true} path="/about">
                    <AboutPage />
                </Route>
                <Route exact={true} path="/media">
                    <MediaPage />
                </Route>
                <Route exact={true} path="/careers">
                    <CareersPage />
                </Route>
                <Route exact={true} path="/products">
                    <ProductsPage />
                </Route>
                <Route exact={true} path="/projects">
                    <ProjectsPage />
                </Route>
                <Route exact={true} path="/contact">
                    <ContactPage />
                </Route>
            </Switch>
        </ScrollToTop>
    );
}

export default App;
