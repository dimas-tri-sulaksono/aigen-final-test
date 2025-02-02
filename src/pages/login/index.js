import Login from "@/components/organism/Login";
import AuthLayout from "@/components/templates/AuthLayout";
import React from "react";

const index = () => {
  return (
    <>
      <AuthLayout title="Login">
        <Login />
      </AuthLayout>
    </>
  );
};

export default index;
