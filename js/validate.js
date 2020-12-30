const enableValidation = ({formSelector, ...rest}) => { 
    const forms = Array.from(document.querySelectorAll(formSelector)); 
    forms.forEach((formElement) => { 
      formElement.addEventListener("submit", (evt) => { 
        evt.preventDefault(); 
      }); 
      setEventListeners({formElement, ...rest}); 
    }); 
  }; 
     
  function setEventListeners({formElement, inputSelector, submitButtonSelector, ...rest}) { 
    const inputList = Array.from(formElement.querySelectorAll(inputSelector)); 
    const buttonElement = formElement.querySelector(submitButtonSelector);
    actualizeButton({inputList, buttonElement, ...rest}); 
    inputList.forEach((inputElement) => { 
      inputElement.addEventListener("input", function () { 
        checkInputValidity({formElement, inputElement, ...rest}); 
        actualizeButton({inputList, buttonElement, ...rest}); 
      }); 
    }); 
  } 
     
  function disableButton(buttonElement,inactiveButtonClass){ 
    buttonElement.classList.add(inactiveButtonClass); 
    buttonElement.setAttribute("disabled", true); 
  } 
     
  function enableButton(buttonElement,inactiveButtonClass){ 
    buttonElement.classList.remove(inactiveButtonClass); 
    buttonElement.removeAttribute("disabled", true); 
  } 
     
   
  const actualizeButton = ({inputList, buttonElement, inactiveButtonClass}) => { 
    if (hasInvalidInput(inputList)) { 
      disableButton(buttonElement,inactiveButtonClass); 
    } else { 
      enableButton(buttonElement,inactiveButtonClass); 
    } 
  }; 
     
  const hasInvalidInput = (inputList) => { 
    return inputList.some((inputElement) => { 
      return !inputElement.validity.valid; 
    }); 
  }; 
     
  const checkInputValidity = ({formElement, inputElement, ...rest}) => { 
    if (!inputElement.validity.valid) { 
      showNumberInputError({formElement, inputElement, ...rest});
      showCheckboxInputError({formElement, inputElement, ...rest}); 
    } else { 
      hideInputError({formElement, inputElement, ...rest}); 
    } 
  }; 
     
  const showNumberInputError = ({formElement, inputElement, errorClass, inputErrorClass, ...rest}) => { 
    const errorElement = formElement.querySelector(`#number-input-error`); 
    inputElement.classList.add(inputErrorClass); 
    errorElement.classList.add(errorClass); 
    errorElement.textContent = "! Не правильный формат телефона"; 
  };

  const showCheckboxInputError = ({formElement, inputElement, errorClass, inputErrorClass, ...rest}) => { 
    const errorElement = formElement.querySelector(`#checkbox-input-error`); 
    inputElement.classList.add(inputErrorClass); 
    errorElement.classList.add(errorClass); 
    errorElement.textContent = "! Подтвердите согласие на обработку персональных данных"; 
  };
     
  function hideInputError({formElement, inputElement, errorClass, inputErrorClass, ...rest}) { 
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.remove(inputErrorClass); 
    errorElement.classList.remove(errorClass); 
    errorElement.textContent = ""; 
  } 
     
  function resetForm(form) { 
    const errorInputs = Array.from(form.querySelectorAll('.form__input_error')); 
    const errorMessages = Array.from(form.querySelectorAll('.form__error_visible')); 
    errorInputs.forEach(errorInput => { 
      errorInput.classList.remove('form__input_error'); 
    }); 
    errorMessages.forEach(errorMessage => { 
      errorMessage.classList.remove('form__error_visible'); 
    }); 
  } 
     
enableValidation({ 
    formSelector: ".form__container", 
    inputSelector: ".form__input", 
    submitButtonSelector: ".form__submit", 
    inactiveButtonClass: "form__submit_disabled", 
    inputErrorClass: "form__input_error", 
    errorClass: "form__error_visible", 
}); 
