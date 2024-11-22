function Signupvalidation(values){
    let error={}
    const email_pattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const password_pattern=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if(values.user_name==="")
    {
        error.user_name="name is required"
    }
    else {
        error.user_name=""
    }
    if (values.user_email==="")
    {
        error.user_email="email is required"
    }
    else if(!email_pattern.test(values.user_email)){
        error.user_email="email didnt match"
    }
    else{
        error.user_email=""
    }
    if(values.user_password==""){
        error.user_password="password is required"
    }
    else if(!password_pattern.test(values.user_password)){
        error.user_password="password must contain alphanumeric&special character"
    }
    else{
        error.user_password=""
    }
    return error;
}
export default Signupvalidation;