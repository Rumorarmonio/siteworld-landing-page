const interestForm = document.querySelector('.interest__form')
const interestTelephone = interestForm.querySelector('input[type="tel"]')
const inputMask = new Inputmask('+7 (999) 999-99-99')
inputMask.mask(interestTelephone)

const interestValidation = new JustValidate(interestForm)

interestValidation
// .addField('.interest__input_name', [
//     {
//         rule: 'minLength',
//         value: 3,
//         errorMessage: 'Поле должно содержать минимум 3 символа!'
//     },
//     {
//         rule: 'maxLength',
//         value: 30,
//     },
//     {
//         rule: 'required',
//         value: true,
//         errorMessage: 'Введите имя!'
//     }
// ])
.addField('.interest__input_telephone', [
    {
        rule: 'required',
        value: true,
        errorMessage: 'Введите телефон!',
    },
    {
        rule: 'function',
        validator: function () {
            const phone = interestTelephone.inputmask.unmaskedvalue()
            return phone.length === 10
        },
        errorMessage: 'Введите настоящий номер телефона!',
    },
])
// .addField('.interest__input_company', [
//     {
//         rule: 'minLength',
//         value: 3,
//         errorMessage: 'Поле должно содержать минимум 3 символа!'
//     },
//     {
//         rule: 'maxLength',
//         value: 30,
//     },
//     {
//         rule: 'required',
//         value: true,
//         errorMessage: 'Введите компанию!'
//     }
// ])
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
    $(() => {
        let form = $('.interest__form')
        let url = form.attr('action')
        $.ajax({
            type: 'POST',
            url: url,
            data: form.serialize(),
            success: function (data) {
                console.log('Validation passes and forms submitted!', event)
            },
            error: function (data) {
                console.log('some Error')
            }
        })
    })
})

const sidebarForm = document.querySelector('.sidebar__form')
const sidebarTelephone = sidebarForm.querySelector('input[type="tel"]')
inputMask.mask(sidebarTelephone)

const sidebarValidation = new JustValidate(sidebarForm)

sidebarValidation
.addField('.sidebar__input_telephone', [
    {
        rule: 'required',
        value: true,
        errorMessage: 'Введите телефон!',
    },
    {
        rule: 'function',
        validator: function () {
            const phone = sidebarTelephone.inputmask.unmaskedvalue()
            return phone.length === 10
        },
        errorMessage: 'Введите настоящий номер телефона!',
    },
])
// TODO: error message appears outside of the label tag
.addField('.sidebar__input_checkbox', [
    {
        rule: 'required',
        value: true,
        errorMessage: 'Согласитесь с правилами!'
    }
])
.onSuccess((event) => {
    $(() => {
        let newForm = $('.sidebar__form')
        let url = newForm.attr('action')
        $.ajax({
            type: 'POST',
            url: url,
            data: newForm.serialize(),
            success: function (data) {
                console.log('Validation passes and forms submitted!', event)
            },
            error: function (data) {
                console.log('some Error')
            }
        })
    })
})

// TODO:
function sendData() {

}