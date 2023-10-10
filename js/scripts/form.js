const form = document.querySelector('.sidebar__form')
const telSelector = form.querySelector('input[type="tel"]')
const inputMask = new Inputmask('+7 (999) 999-99-99')
inputMask.mask(telSelector)

const validation = new JustValidate('.sidebar__form')

validation
.addField('.input-name', [
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
.addField('.input-tel', [
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
.addField('.input-checkbox', [
    {
        rule: 'required',
        value: true,
        errorMessage: 'Согласитесь с правилами!'
    }
])
.onSuccess((event) => {
    console.log('Validation passes and form submitted', event)
})
