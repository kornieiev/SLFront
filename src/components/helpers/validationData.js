import * as Yup from "yup";

import {
  makersList,
  typeOfIgnitionList,
  typeOfKeyList,
} from "../../constants/constants";

export const editKeyValidationSchema = Yup.object().shape({
  Maker: Yup.string(),
  // .oneOf(makersList, "Invalid Maker"),
  Model: Yup.string(),
  YearStart: Yup.number()
    .integer("Must be an integer")
    .min(1970, "Must be at least 1970")
    .max(2050, "Must be at most 2050"),
  YearEnd: Yup.number()
    .integer("Must be an integer")
    .min(1970, "Must be at least 1970")
    .max(2050, "Must be at most 2050"),
  "Type of Ignition": Yup.string().oneOf(
    typeOfIgnitionList,
    "Invalid Type of Ignition"
  ),
  "Type of Key": Yup.string().oneOf(typeOfKeyList, "Invalid Type of Key"),
  "No Buttons": Yup.number()
    .integer("Must be an integer")
    .min(1, "Must be at least 1")
    .max(10, "Must be at most 10"),
  "Price All Keys Lost": Yup.string(),
  "Price Add a Key": Yup.string(),
  "Price Program Only": Yup.string(),
  "Dealer Price": Yup.string(),
  "Dealer Program": Yup.string(),
  "Dealer Emergency Blade": Yup.string(),
  "Dealer Price Total": Yup.string(),
  "Dealer Location": Yup.string(),
  "Secure Locks Parts": Yup.string(),
  "Part #": Yup.string(),
  Link: Yup.string(),
  Comments: Yup.string(),
});

export const addKeyValidationSchema = Yup.object().shape({
  Maker: Yup.string().required("Required").oneOf(makersList, "Required"),
  Model: Yup.string().required("Required"),
  YearStart: Yup.number()
    .integer("Must be an integer")
    .min(1970, "Must be at least 1970")
    .max(2050, "Must be at most 2050")
    .required("Required"),
  YearEnd: Yup.number()
    .integer("Must be an integer")
    .min(1970, "Must be at least 1970")
    .max(2050, "Must be at most 2050")
    .required("Required"),
  "Type of Ignition": Yup.string()
    .required("Required")
    .oneOf(typeOfIgnitionList, "Required"),
  "Type of Key": Yup.string()
    .required("Required")
    .oneOf(typeOfKeyList, "Required"),
  "No Buttons": Yup.number()
    .integer("Must be an integer")
    .min(1, "Must be at least 1")
    .max(10, "Must be at most 10")
    .required("Required"),
});
