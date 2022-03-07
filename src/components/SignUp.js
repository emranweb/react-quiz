import React from "react";
import Form from "./Form";
import TextInput from "./TextInput";

const SignUp = () => {
  return (
    <>
      <div class="column">
        <div class="illustration">
          <img src="./images/signup.svg" alt="Signup" />
        </div>
        <Form className={`signup form`} action="#">
          <TextInput type="text" placeholder="Enter email" />
        </Form>
      </div>
    </>
  );
};

export default SignUp;
