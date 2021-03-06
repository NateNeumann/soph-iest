import Layout from "components/Layout";
import Contact from "components/Contact";

import "scss/app.scss";

const ContactPage = () => (
  <Layout title="Contact" currentPage="/contact">
    <Contact />
  </Layout>
);

export default ContactPage;
