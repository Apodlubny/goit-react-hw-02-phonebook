import { Component } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { Label, Input, Btn, FormContainer } from './ContactForm.styled';
import * as yup from 'yup';
const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(3).max(10).required('A phone number is required'),
});
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handSubmit = (valus, { resetForm }) => {
    this.props.formSubmitHandler(valus);

    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={this.state}
        validationSchema={schema}
        onSubmit={this.handSubmit}
      >
        <FormContainer>
          <Form autoComplete="off">
            <Label htmlFor="name">
              Name
              <Input type="text" name="name" />
              <ErrorMessage name="name" />
            </Label>

            <Label htmlFor="number" style={{ marginTop: '20px' }}>
              Number
              <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              />
              <ErrorMessage name="number" />
            </Label>
            <Btn type="submit">Add contact</Btn>
          </Form>
        </FormContainer>
      </Formik>
    );
  }
}
export default ContactForm;
