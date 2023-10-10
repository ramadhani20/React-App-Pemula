import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";

const FormLogin = () => {
    return (
        <form action="">
        <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email"/>
        <InputForm label="Password" type="password" placeholder="******" name="password"/>  
        <Button variant="bg-blue-600">Login</Button>
      </form>
    )
}

export default FormLogin;