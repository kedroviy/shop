export class UserModel {
    constructor(
        public firstName = '',
        public lastName = '',
        public email = '',
        public phone = [],
        public selfDelivery: false,
        public addressType = 'home',
        ) { }
}
