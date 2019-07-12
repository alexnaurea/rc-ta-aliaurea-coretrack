export class LoginPageConstant {

    static get elementNames() {
        return {
            username: 'Username',
            password: 'Password',
            environment: 'Environment',
            ok: 'OK',
            language: 'Language',
            signIn: 'Sign In',
            settings: 'settings',
        };
    }

    static get attributes() {
        return {
            classes: {
                settings: 'icon-gearwheel',
                errorPopMessage: 'errorpop-message',
            },
            dataRef: {
                btnInnerEl: 'btnInnerEl',
            },
        };
    }

    static get errorMessages() {
        return {
            incorrectLoginPassword: 'Incorrect Login/Password',
            pleaseFillAllFields: 'Please fill in all fields',
        };
    }
}
