import React from 'react';
import Layout from '../components/Layout/layout';
import ContactForm from '../components/Contact/contactForm';

const Contact = props => {
  return (
    <div className="index">
      <Layout>
        <ContactForm />
      </Layout>
    </div>
  );
};
export default Contact;
