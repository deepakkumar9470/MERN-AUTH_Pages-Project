export const validation = (values) => {
    const errors = {}

    if (values.name === "") {
        errors.name = "Name is required";
    }

    if (values.phone === "") {
        errors.phone = "Phone is required";
    }

    if (values.email === "") {
        errors.email = "Email is required";
    }else if(!values.email.includes('@')){
        errors.email = "Email is incorrect";
    }

    if (values.password === "") {
        errors.password = "Password is required";
    } else if (values.password.length<0) {
        errors.password = "Password must me 5 character's long";
    }


    return errors;
}