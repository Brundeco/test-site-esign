/**
 * Created by Bart Decorte
 * Date: 16/06/2020
 * Time: 17:08
 */
import formDataEntries from 'form-data-entries';

const EventEmitter = require('events');

let recaptchaOnLoadCallbackExposed = false;
let recaptchaScriptTagEnabled = false;
let recaptchaScriptTagSelector = '#script-recaptcha';
const forms = [];

class Form extends EventEmitter {
  constructor(form, options = {}) {
    super();
    const {
      buttonSelector = '[type="submit"]',
      buttonLoadingClass = 'button--loading',
      generalErrorMessage = 'Something went wrong. Please try again later.',
      recaptcha = true,
      recaptchaClass = 'g-recaptcha',
      recaptchaName = 'g-recaptcha-response',
      replaceFormOnSuccess = true,
      resultSelector = '.result',
      xhr = true,
    } = options;
    this.active = false;
    this.buttonLoadingClass = buttonLoadingClass;
    this.buttonSelector = buttonSelector;
    this.generalErrorMessage = generalErrorMessage;
    this.recaptcha = recaptcha;
    this.recaptchaCallbackName = Form.uniqueRecaptchaCallbackName();
    this.recaptchaClass = recaptchaClass;
    this.recaptchaName = recaptchaName;
    this.recaptchaWidgetId = undefined;
    this.replaceFormOnSuccess = replaceFormOnSuccess;
    this.resultSelector = resultSelector;
    this.xhr = xhr;

    if (form instanceof HTMLElement) {
      this.form = form;
    } else {
      this.form = document.querySelector(form);
    }

    if (this.recaptcha) {
      this.exposeRecaptchaCallback();
      this.bindRecaptchaCallback();
    }

    this.bindListeners();
    Form.registerForm(this);
    if (this.recaptcha) {
      Form.exposeRecaptchaOnLoadCallback();
    }
  }

  static get recaptchaOnLoadCallbackExposed() {
    return recaptchaOnLoadCallbackExposed;
  }

  static set recaptchaOnLoadCallbackExposed(value) {
    recaptchaOnLoadCallbackExposed = value;
  }

  static get recaptchaScriptTagEnabled() {
    return recaptchaScriptTagEnabled;
  }

  static set recaptchaScriptTagEnabled(value) {
    recaptchaScriptTagEnabled = value;
  }

  static get recaptchaScriptTagSelector() {
    return recaptchaScriptTagSelector;
  }

  static set recaptchaScriptTagSelector(value) {
    recaptchaScriptTagSelector = value;
  }

  static registerForm(form) {
    forms.push(form);
  }

  static uniqueRecaptchaCallbackName() {
    const randomize = () => {
      const rand = Math.random()
        .toString(36)
        .substr(2, 5);
      return `${rand[0].toUpperCase()}${rand.substr(1)}`;
    };

    const exists = candidate => {
      return forms.find(form => form.recaptchaCallbackName === candidate);
    };

    let name = `recaptchaCallbackForm${randomize()}`;
    while (exists(name)) {
      name = `recaptchaCallbackForm${randomize()}`;
    }
    return name;
  }

  renderRecaptcha() {
    // explicit recaptcha rendering (to support multiple instances)
    const recaptcha = this.recaptchaContainer();
    const attributes = {
      sitekey: recaptcha.dataset.sitekey,
      size: recaptcha.dataset.size,
      callback: recaptcha.dataset.callback,
    };

    this.recaptchaWidgetId = window.grecaptcha.render(recaptcha, attributes);
  }

  static exposeRecaptchaOnLoadCallback() {
    if (!Form.recaptchaOnLoadCallbackExposed) {
      window.onloadRecaptchaCallback = () => {
        Form.recaptchaOnLoadCallback();
      };
      Form.recaptchaOnLoadCallbackExposed = true;
    }
  }

  static enableRecaptchaScriptTag() {
    if (!Form.recaptchaScriptTagEnabled) {
      const script = document.querySelector(this.recaptchaScriptTagSelector);
      if (!script.getAttribute('src')) {
        script.setAttribute('src', script.dataset.src);
      }
      Form.recaptchaScriptTagEnabled = true;
    }
  }

  static recaptchaOnLoadCallback() {
    forms.forEach(form => {
      form.renderRecaptcha();
    });
  }

  bindListeners() {
    this.form.addEventListener('submit', ev => this.lSubmit(ev));
    this.form.addEventListener('focusin', ev => this.lInteraction(ev));
    this.form.addEventListener('input', ev => this.lInteraction(ev));
    this.form.addEventListener('change', ev => this.lInteraction(ev));
  }

  async lSubmit(ev) {
    this.setState(true);

    if (this.recaptcha || this.xhr) {
      ev.preventDefault();
    }

    if (this.recaptcha) {
      const input = this.recaptchaInput();
      if (input && input.value !== '') {
        // Use window.grecaptcha as recaptcha is async loaded
        window.grecaptcha.reset(this.recaptchaWidgetId);
      }
      window.grecaptcha.execute(this.recaptchaWidgetId);
      return this;
    }

    if (this.xhr) {
      await this.executeXhr();
    }

    return this;
  }

  lInteraction() {
    Form.enableRecaptchaScriptTag();
  }

  async recaptchaCallback() {
    if (this.xhr) {
      await this.executeXhr();
      return this;
    }

    this.form.submit();
    return this;
  }

  async executeXhr() {
    const response = await this.sendXhr();
    const json = await response.json();

    this.setState(false);

    if (response.ok) {
      this.handleSuccess(json);
    } else {
      this.handleFailure(response.status, json);
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

  recaptchaContainer() {
    return this.form.querySelector(`.${this.recaptchaClass}`);
  }

  recaptchaInput() {
    return this.form.querySelector(`[name="${this.recaptchaName}"]`);
  }

  handleFailure(status, data) {
    if (status === 422) {
      // Validation error
      this.showValidationErrors(data);
    } else {
      // Something else went wrong
      this.showGeneralError();
    }
  }

  handleSuccess(data) {
    const { result } = data;
    this.showSuccessMessage(result);
  }

  showValidationErrors(response) {
    const { result } = response;
    this.resultContainer().innerHTML = result;
  }

  showGeneralError() {
    this.resultContainer().innerHTML = `
      <div class="note note--error">
        <p>${this.generalErrorMessage}</p>
      </div>`;
  }

  showSuccessMessage(successMarkup) {
    if (this.replaceFormOnSuccess) {
      this.form.outerHTML = successMarkup;
    } else {
      this.resultContainer().innerHTML = successMarkup;
    }
  }

  data() {
    const data = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of formDataEntries(this.form)) {
      data[key] = value;
    }
    return data;
  }

  setState(activeState) {
    this.active = activeState;
    this.setSubmitButtonsActive(activeState);
  }

  async sendXhr() {
    return fetch(this.action(), {
      method: this.method(),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(this.data()),
    });
  }

  setSubmitButtonsActive(activeState) {
    const buttons = this.form.querySelectorAll(this.buttonSelector);
    buttons.forEach(button => {
      this.setButtonLoadingClass(button, activeState);
      this.setButtonDisabled(button, activeState);
    });
    return this;
  }

  setButtonLoadingClass(button, activeState) {
    const buttonHasLoadingClass = button.classList.contains(this.buttonLoadingClass);
    if (activeState && !buttonHasLoadingClass) {
      button.classList.add(this.buttonLoadingClass);
    } else if (!activeState && buttonHasLoadingClass) {
      button.classList.remove(this.buttonLoadingClass);
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

  bindRecaptchaCallback() {
    this.recaptchaContainer().dataset.callback = this.recaptchaCallbackName;
    return this;
  }

  exposeRecaptchaCallback() {
    window[this.recaptchaCallbackName] = () => {
      this.recaptchaCallback();
    };
    return this;
  }
}

const formInit = (form, options = {}) => {
  return new Form(form, options);
};

export { formInit as default, formInit as form, Form };
