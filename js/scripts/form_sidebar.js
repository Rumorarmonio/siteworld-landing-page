const sidebarForm = document.querySelector('.sidebar__form')
const sidebarTelephone = sidebarForm.querySelector('input[type="tel"]')
const inputMask = new Inputmask('+7 (999) 999-99-99')
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
        let form = $('.sidebar__form')
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