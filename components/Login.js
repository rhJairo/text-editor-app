import Button from "@material-tailwind/react/Button";
import { signIn } from "next-auth/client";


function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Button
        color="blue"
        buttonType="filled"
        ripple="light"
        className="w-44 mh-10"
        onClick={signIn}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
