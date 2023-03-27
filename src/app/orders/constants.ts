export const FORM_FIELD = {
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    EMAIL: 'email',
    SEND_PRODUCTS: 'sendProducts',
    PHONE: 'phone',
    SELF_DELIVERY: 'selfDelivery',
    SHIPPING_ADRESS: 'shippingAddress'
}

export const validationMessagesMap = new Map([
    ['firstName', {
        message: '', // <== message for user
        firstLetter: 'Enter first letter like uppercase',
        required: 'Please enter your first name.',
        minlength: 'The first name must be longer than 3 characters.'
    }],
    ['lastName', {
        message: '',
        required: 'Please enter your last name.'
    }],
    ['email', {
        message: '',
        required: 'Please enter your email address.',
        pattern: 'Please enter a valid email address.',
        email: 'Please enter a valid email address.',
        asyncEmailInvalid:
            'This email already exists. Please enter other email address.'
    }],
    ['phone', {
        message: '',
        required: 'Please enter your phone number.'
    }],
    ['notification', {
        message: ''
    }],
]);