import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Container , Form , Button , Alert} from 'react-bootstrap';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    }  else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  };
  
  return (
    <Container className="m-5">
      <h2 className="heading" >Contact Me</h2>
      <Form id="contact-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          {/* <Form.Label htmlFor="name">Name:</Form.Label> */}
          <Form.Control type="text" placeholder="Your Name" defaultValue={name} onBlur={handleChange} name="name" />
        </Form.Group>
        <Form.Group className="mb-3">
          {/* <Form.Label htmlFor="email">Email address:</Form.Label> */}
          <Form.Control type="email" placeholder="Your email" defaultValue={email} onBlur={handleChange} name="email" />
        </Form.Group>
        <Form.Group className="mb-3">
          {/* <Form.Label htmlFor="message">Message:</Form.Label> */}
          <Form.Control as="textarea" placeholder="Your Message" name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
        </Form.Group>
        {errorMessage && (
          <Alert variant="danger">
            {errorMessage}
          </Alert>
        )}
        <Button variant="secondary" size="lg" type="submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default ContactForm;