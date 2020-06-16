/**
 * Created by Bart Decorte
 * Date: 16/06/2020
 * Time: 17:08
 */
const EventEmitter = require('events');

export default class Form extends EventEmitter {
  constructor(form, {
    asynchronous = false,
    buttonSelector = '[type="submit"]',
    buttonLoadingClass = 'button--loading',
    recaptcha = false,
    resultSelector = '.result',
    generalErrorMessage = 'Something went wrong. Please try again later.',
    replaceFormOnSuccess = true,
  }) {
    super();
    this.asynchronous = asynchronous;
    this.recaptcha = recaptcha;
    this.buttonSelector = buttonSelector;
    this.buttonLoadingClass = buttonLoadingClass;
    this.resultSelector = resultSelector;
    this.generalErrorMessage = generalErrorMessage;
    this.replaceFormOnSuccess = replaceFormOnSuccess;
    this.active = false;

    if (form instanceof HTMLElement) {
      this.form = form;
    } else {
      this.form = document.querySelector(form);
    }

    this.bindListeners();
  }

  bindListeners() {
    this.form.addEventListener('submit', (ev) => this.lFormSubmit(ev));
  }

  async lFormSubmit(ev) {
    this.setState(true);
    if (this.asynchronous) {
      ev.preventDefault();
      const response = await this.sendAsynchronous();

      if (response.ok) {
        this.handleSuccess(response);
      } else {
        this.handleFailure(response);
      }

      this.setState(false);
    }
  }

  action() {
    const action = this.form.getAttribute('action');
    return action || window.location;
  }

  method() {
    const method = this.form.getAttribute('method');
    return method || 'GET';
  }

  resultContainer() {
    return this.form.querySelector(this.resultSelector);
  }

  handleFailure(response) {
    const data = response.json;
    if (response.status === 422) {
      // Validation error
      this.showValidationErrors(data);
    } else {
      // Something else went wrong
      this.showGeneralError();
    }
  }

  handleSuccess(response) {
    const { result } = response;
    this.showSuccessMessage(result)
  }

  showValidationErrors(response) {
    const { result } = response;
    this.resultContainer().innerHTML = result;
  }

  showGeneralError() {
    this.resultContainer().innerHTML = `<p>${this.generalErrorMessage}</p>`;
  }

  showSuccessMessage(successMarkup) {
    if (this.replaceFormOnSuccess) {
      this.form.outerHTML = successMarkup;
    } else {
      this.resultContainer().innerHTML = successMarkup;
    }
  }

  data() {
    return new Form(this.form);
  }

  setState(activeState) {
    this.active = activeState;
    this.setSubmitButtonsActive(activeState);
  }

  async sendAsynchronous() {
    return fetch(this.action(), {
      method: this.method(),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(this.data()),
    });
  }

  setSubmitButtonsActive(activeState) {
    const buttons = this.form.querySelectorAll(this.buttonSelector);
    buttons.forEach((button) => {
      this.setButtonLoadingClass(button, activeState);
      this.setButtonDisabled(button, activeState);
    });
    return this;
  }

  setButtonLoadingClass(button, activeState) {
    const buttonHasLoadingClass = button.classList.contains(this.buttonLoadingClass);
    if (activeState && !buttonHasLoadingClass) {
      button.addClass(this.buttonLoadingClass);
    } else if (!activeState && buttonHasLoadingClass) {
      button.removeClass(this.buttonLoadingClass);
    }
    return this;
  }

  setButtonDisabled(button, activeState) {
    const buttonIsDisabled = button.hasAttribute('disabled');
    if (activeState && !buttonIsDisabled) {
      button.setAttribute('disabled', '');
    } else if (!activeState && buttonIsDisabled) {
      button.removeAttribute('disabled');
    }
    return this;
  }
}
