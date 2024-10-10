import * as yup from "yup";

export const UserSchema = yup.object().shape({
  username: yup.string().required("Username is required"),

  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[!@#$%^&*(),.{}|<>]/, "Password must contain at least one symbol")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),

  mobileNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),
});
