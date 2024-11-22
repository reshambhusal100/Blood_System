function Adminvalidation(values){
    let error={}
    //patterns
    const email_pattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const password_pattern=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (values.Admin_email==="")
    {
        error.Admin_email="email is required"
    }
    else if(!email_pattern.test(values.Admin_email)){
        error.Admin_email="email didnt match"
    }
    else{
        error.Admin_email=""
    }
    if(values.Admin_password===""){
        error.Admin_password="password is required"
    }
    else if(!password_pattern.test(values.Admin_password)){
        error.Admin_password="password must contain alphanumeric&special character"
        
    }
    else{
        error.Admin_password=""
    }
    return error;
    
    }
    export default Adminvalidation;