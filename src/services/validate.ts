type SignUpValidationPayload = {
    names: string
    lastNames: string
    phone: string
    email: string
    password: string
    validPassword: string
}

export function validate(payload: SignUpValidationPayload) {
    if (payload.names.length < 3) {
        console.log("names");
    }
    if (payload.lastNames.length < 3) {
        console.log("lastNames")
    }
    if (payload.phone.length < 10) {
        console.log('phone')
    }
    if (payload.email.includes('@' && '.')) {
        console.log("email")
    }
    if (payload.password.length < 8) {
        console.log('password')
    }
    if (payload.validPassword != payload.password) {
        console.log('validpass')
    }

}

