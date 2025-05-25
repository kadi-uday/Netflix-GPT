export const checkValidData = (email, password, name = null) => {

    const isEmailValid = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

     if (name !== null) {
        const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
        if (!isNameValid) return "Name is not valid";
    }
    
    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null; // if no errors
};