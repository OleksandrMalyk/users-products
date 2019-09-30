import * as yup from 'yup';

function equalTo(ref, msg) {
    return this.test({
        name: 'equalTo',
        exclusive: false,
        message: msg || '${path} must be the same as ${reference}',
        params: {
            reference: ref.path,
        },
        test: function (value) {
            return value === this.resolve(ref);
        },
    });
}

yup.addMethod(yup.string, 'equalTo', equalTo);


export default yup.object().shape({
    email: yup.string()
        .email('must be a valid email')
        .required('required field'),
    firstName: yup.string()
        .min(4, 'must be at least ${min} characters')
        .required('required field'),
    lastName: yup.string()
        .min(4, 'must be at least ${min} characters')
        .required('required field'),
    password: yup.string()
        .min(3, 'must be at least ${min} characters')
        .required('required field'),
    //.equalTo(yup.ref('passwordConfirm'), 'passwords should match'),
    passwordConfirm: yup.string()
        .equalTo(yup.ref('password'), 'passwords should match')
        .required('required field'),
    date: yup.mixed()
        .test(
            'is-actual-date',
            'the date is not actual',
            function (value) {
                if(!value) {
                    return false;
                }
                const currentDate = new Date((new Date()).setHours(0, 0, 0, 0)).getTime();
                const passedDate = (new Date(value)).getTime();
                //const passedDate = new Date(value);
                // console.log('is-actual-date', new Date(value));
                // console.log('is-actual-date', value,currentDate);
                return currentDate <= passedDate;
                //return true
            },
        ).required()
});

