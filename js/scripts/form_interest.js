const interestForm = document.querySelector('.interest__form')
const interestTelephone = interestForm.querySelector('input[type="tel"]')
const inputMask = new Inputmask('+7 (999) 999-99-99')
inputMask.mask(interestTelephone)

const interestValidation = new JustValidate(interestForm)

interestValidation
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
            const phone = interestTelephone.inputmask.unmaskedvalue()
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
    // event.preventDefault()

    let form = $('.interest__form')

    form.submit()

    event.preventDefault();

    // $('#modal-1').modal('show');

    // window.setTimeout(function() {
    //     $(form).submit();
    // }, 1500, $('#savePatient').closest('form'));

    // event.preventDefault()
    // $('.interest__form').submit()

    // let form = $('.interest__form')
    // let url = form.attr('action')
    // $.ajax({
    //     type: 'POST',
    //     url: url,
    //     data: form.serialize(),
    //     success: function (data) {
    //         console.log(data, 'Validation passes and forms submitted!', event)
    //     },
    //     error: function (data) {
    //         console.log(data, 'some Error')
    //     }
    // })

    // $(() => {
    //     let form = $('.interest__form')
    //     let url = form.attr('action')
    //     $.ajax({
    //         type: 'POST',
    //         url: url,
    //         data: form.serialize(),
    //         success: function (data) {
    //             console.log(data, 'Validation passes and forms submitted!', event)
    //             form.submit()
    //         },
    //         error: function (data) {
    //             console.log(data, 'some Error')
    //         }
    //     })
    // })

    // $(() => {
    //     let form = $('.interest__form')
    //     let url = form.attr('action')
    //
    //     $.ajax({
    //         type: 'POST',
    //         url: url,
    //         data: form.serialize(), // serializes the form's elements.
    //         success: function (data) {
    //             alert(data) // show response from the php script.
    //         }
    //     })
    //
    //     return false // avoid to execute the actual submit of the form.
    // })
})

// TODO:
function sendData() {

}