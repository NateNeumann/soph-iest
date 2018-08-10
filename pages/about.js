import { translate } from "react-i18next";
import i18n from "../i18n";
import i18nConfig from "../i18nConfig";

import Layout from "../components/Layout";
import About from "../components/About";

import "../scss/app.scss";

const AboutPage = () => (
  <Layout title="About" currentPage="/about">
    <About />
  </Layout>
);

const Extended = translate(i18nConfig.ns, { i18n, wait: process.browser })(
  AboutPage
);

Extended.getInitialProps = async ({ req }) =>
  req && !process.browser ? i18n.getInitialProps(req, i18nConfig.ns) : {};

export default Extended;
