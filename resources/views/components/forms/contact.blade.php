<form id="form-contact" action="#" method="post" class="validate">
  @include('components.forms.error')
  @include('components.forms.success')

  <div class="input-group">
    <label for="name">Naam <span class="required">*</span></label>
    <input type="text" name="name" id="name" required />
  </div>
  <div class="input-group">
    <label for="email">E-mail <span class="required">*</span></label>
    <input type="email" name="email" id="email" required />
  </div>
  <div class="input-group">
    <label for="phone">Telefoon</label>
    <input type="tel" name="phone" id="phone"/>
  </div>
  <div class="input-group">
    <label for="select">Onderwerp</label>
    <select id="select" name="select">
      <option value="">Selecteer onderwerp</option>
      <option value="Optie 1">Optie 1</option>
      <option value="Optie 2">Optie 2</option>
    </select>
  </div>
  <div class="input-group">
    <label for="message">Bericht <span class="required">*</span></label>
    <textarea name="message" id="message" required></textarea>
  </div>

  <fieldset>
    <legend>Kies een optie <span class="required">*</span></legend>
    <div class="input-group input-group--horizontal">
      <div class="radio">
        <input type="radio" id="radio-1" name="radio" value="1" required/>
        <label for="radio-1">Optie 1</label>
      </div>
      <div class="radio">
        <input type="radio" id="radio-2" name="radio" value="1" required/>
        <label for="radio-2">Optie 2</label>
      </div>
    </div>
  </fieldset>

  <fieldset>
    <legend>Kies een optie</legend>
    <div class="input-group">
      <div class="radio">
        <input type="radio" id="radio-1" name="radio" value="1" required/>
        <label for="radio-1">Optie 1</label>
      </div>
      <div class="radio">
        <input type="radio" id="radio-2" name="radio" value="1" required/>
        <label for="radio-2">Optie 2</label>
      </div>
    </div>
  </fieldset>

  <div class="input-group">
    <div class="checkbox">
      <input type="checkbox" id="privacy" name="privacy" value="1" required />
      <label for="privacy">I agree my data will be processed in accordance with the <a href="privacy.html">privacy policy</a>. <span class="required">*</span></label>
    </div>
  </div>

  {{-- DEV recaptcha key --}}
  <div class="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" data-size="invisible"></div>

  <div class="button-group">
    <input type="submit" value="Verzenden" class="button"/>
  </div>
</form>
