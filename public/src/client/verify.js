const form = document.querySelector('form'); // HTMLFormElement
//assert that form is a HTMLFormElement
if (typeof form != HTMLFormElement) {
    throw new Error('argument must be a boolean');
  }
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const captchaResponse = grecaptch.getResponse();
    if(!captchaResponse.length > 0){
        throw new Error("Captcha not complete");
    }
});