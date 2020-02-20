import React, { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AnchorLink from './AnchorLink';

const nsBase = 'component';
const ns = `${nsBase}-contact`;

const Contact = () => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true,
  });

  const [contactState, setContactState] = useState({
    form: '',
    formShow: true,
    formName: '',
    formEmail: '',
    formPhone: '',
    formCompany: '',
    formMessage: '',
    formResponse: '',
  });

  const handleChange = (e) => {
    if (e.target.value) {
      e.target.classList.add('has-text');
    } else {
      e.target.classList.remove('has-text');
    }

    const newContactState = contactState;

    newContactState[e.target.name] = e.target.value;

    setContactState((prevState) => {
      return { ...prevState, newContactState };
    });
  };

  const submitForm = (event) => {
    event.preventDefault();

    const data = {
      name: contactState.formName,
      email: contactState.formEmail,
      phone: contactState.formPhone,
      company: contactState.formCompany,
      message: contactState.formMessage,
    };
    // console.log(data);

    fetch('https://justin-bond.com/sendmail/index.php', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    }).then(
      (res) => { return res.json(); }
    ).catch(
      (error) => {
        console.error('Error:', error); // eslint-disable-line no-console
      }
    ).then(
      (response) => {
        // console.log('Success:', response);
        if (response.status === 1) {
          setContactState((prevState) => {
            return { ...prevState, formResponse: 'accepted', formShow: false };
          });
        } else {
          setContactState((prevState) => {
            return { ...prevState, formResponse: response.error };
          });
        }
      }
    );
  };

  const getFormResponse = () => {
    const { formResponse } = contactState;
    let response = null;

    if (formResponse === 'accepted') {
      response = (
        <div>
          Thank you for reaching out. I will be in touch as soon as possible.
        </div>
      );
    } else if (formResponse === '') {
      response = (
        <div>
          {formResponse}
        </div>
      );
    } else {
      response = '';
    }

    return response;
  };

  const formShow = contactState.formShow ? '' : 'collapse';
  return (
    <div id={'contact'} className={rootClassnames}>
      <div className={`${ns}--form__container`}>
        <div className={`${ns}--form__title`}>
          Lets Talk
        </div>
        <form
          className={`${ns}--form ${formShow}`}
          onSubmit={(e) => { submitForm(e); }}
        >
          <div className={`${ns}--form__name`}>
            <label htmlFor={'name'}>
              Your Name*
              <input
                onChange={(e) => { handleChange(e); }}
                type={'text'}
                name={'formName'}
                id={'name'}
                required
              />
            </label>
          </div>
          <div className={`${ns}--form__email`}>
            <label htmlFor={'email'}>
              Email Address*
              <input
                onChange={(e) => { handleChange(e); }}
                type={'text'}
                name={'formEmail'}
                id={'email'}
                required
              />
            </label>
          </div>
          <div className={`${ns}--form__phone`}>
            <label htmlFor={'phone'}>
              Phone*
              <input
                onChange={(e) => { handleChange(e); }}
                type={'text'}
                name={'formPhone'}
                id={'phone'}
                required
              />
            </label>
          </div>
          <div className={`${ns}--form__company`}>
            <label htmlFor={'company'}>
              Company
              <input
                onChange={(e) => { handleChange(e); }}
                type={'text'}
                name={'formCompany'}
                id={'company'}
              />
            </label>
          </div>
          <div className={`${ns}--form__message`}>
            <label htmlFor={'message'}>
              Message*
              <input
                onChange={(e) => { handleChange(e); }}
                type={'text'}
                name={'formMessage'}
                id={'message'}
                required
              />
            </label>
          </div>
          <div className={`${ns}--form__submit`}>
            <button type={'submit'}>
              Submit Message
            </button>
          </div>
        </form>
        { getFormResponse() }
      </div>
      <div className={`${ns}--social`}>
        <div>Follow Me On</div>
        <div className={`${ns}--social__icons`}>
          <AnchorLink to={'https://www.linkedin.com/in/justinbond909/'} target={'_blank'}>
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </AnchorLink>
          <AnchorLink to={'https://github.com/geekster909'} target={'_blank'}>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </AnchorLink>
          <AnchorLink to={'https://codepen.io/geekster909/'} target={'_blank'}>
            <FontAwesomeIcon icon={['fab', 'codepen']} />
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Contact;
