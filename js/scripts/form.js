const form = document.querySelector('.interest__form')
const telSelector = form.querySelector('input[type="tel"]')
const inputMask = new Inputmask('+7 (999) 999-99-99')
inputMask.mask(telSelector)

const validation = new JustValidate('.interest__form')

validation
.addField('.interest__input_name', [
    {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать минимум 3 символа!'
    },
    {
        rule: 'maxLength',
        value: 30,
    },
    {
        rule: 'required',
        value: true,
        errorMessage: 'Введите имя!'
    }
])
.addField('.interest__input_telephone', [
    {
        rule: 'required',
        value: true,
        errorMessage: 'Введите телефон!',
    },
    {
        rule: 'function',
        validator: function () {
            const phone = telSelector.inputmask.unmaskedvalue()
            return phone.length === 10
        },
        errorMessage: 'Введите настоящий номер телефона!',
    },
])
.addField('.interest__input_company', [
    {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать минимум 3 символа!'
    },
    {
        rule: 'maxLength',
        value: 30,
    },
    {
        rule: 'required',
        value: true,
        errorMessage: 'Введите компанию!'
    }
])
.addField('.interest__input_email', [
    {
        rule: 'required',
        value: true,
        errorMessage: 'Введите почту!',
    },
    {
        rule: 'email',
        value: true,
        errorMessage: 'Введите настоящую почту!',
    },
])
// TODO: error message appears outside of the label tag
.addField('.interest__input_checkbox', [
    {
        rule: 'required',
        value: true,
        errorMessage: 'Согласитесь с правилами!'
    }
])
.onSuccess((event) => {
    console.log('Validation passes and form submitted!', event)
})
