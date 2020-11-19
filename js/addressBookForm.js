class AddressBookData {
    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        }
        else throw 'Name is incorrect!';
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^([1-9]{1}[0-9]{9}|[9]{1}[1]{1}[1-9]{1}[0-9]{9}|/[+]{1}[9]{1}[1]{1}[1-9]{1}[0-9]{9})$');
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else throw 'Phone Number is incorrect!';
    }

    get address() {
        return this._address;
    }

    set address(address) {
        let addressRegex = RegExp('^[a-zA-Z0-9]{3,}\\s[a-zA-Z0-9]{3,}([ ]|[a-zA-Z0-9]{3,})*?$');
        if (addressRegex.test(address)) {
            this._address = address;
        }
        else throw 'Address is incorrect!';
    }
}

window.addEventListener('DOMContentLoaded', (event) => {

    //event listener for name validation!!!!
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    const textErrorNew = document.querySelector('.text-error-new');

    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }

        try {
            (new AddressBookData()).name = name.value;
            textError.textContent = "";
            textErrorNew.textContent = "Fine!!";
        } catch (e) {
            textErrorNew.textContent = "";
            textError.textContent = e;
        }
    });

    //event listener for address validation!!!!
    const address = document.querySelector('#address');
    const addressTextError = document.querySelector('.address-text-error');
    const addressTextErrorNew = document.querySelector('.address-text-error-new');

    address.addEventListener('input', function () {
        if (address.value.length == 0) {
            addressTextError.textContent = "";
            return;
        }

        try {
            (new AddressBookData()).address = address.value;
            addressTextError.textContent = "";
            addressTextErrorNew.textContent = "Fine!!";
        } catch (e) {
            addressTextErrorNew.textContent = "";
            addressTextError.textContent = e;
        }
    });

    //event listener for phone number validation!!!!
    const phoneNumber = document.querySelector('#phoneNumber');
    const phoneNumberTextError = document.querySelector('.phoneNumber-text-error');
    const phoneNumberTextErrorNew = document.querySelector('.phoneNumber-text-error-new');

    phoneNumber.addEventListener('input', function () {
        if (phoneNumber.value.length == 0) {
            phoneNumberTextError.textContent = "";
            return;
        }

        try {
            (new AddressBookData()).phoneNumber = phoneNumber.value;
            phoneNumberTextError.textContent = "";
            phoneNumberTextErrorNew.textContent = "Fine!!";
        } catch (e) {
            phoneNumberTextErrorNew.textContent = "";
            phoneNumberTextError.textContent = e;
        }
    });
});