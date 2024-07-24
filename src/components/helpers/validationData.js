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
    .integer("Year must be an integer")
    .min(1970, "Year must be at least 1970")
    .max(2050, "Year must be at most 2050"),
  // .required("Required"),
  YearEnd: Yup.number()
    .integer("Year must be an integer")
    .min(1970, "Year must be at least 1970")
    .max(2050, "Year must be at most 2050"),
  // .required("Required"),
  "Type of Ignition": Yup.string().oneOf(
    typeOfIgnitionList,
    "Invalid Type of Ignition"
  ),
  "Type of Key": Yup.string().oneOf(typeOfKeyList, "Invalid Type of Key"),
  "No Buttons": Yup.number()
    .integer("No Buttons must be an integer")
    .min(1, "No Buttons must be at least 1")
    .max(10, "No Buttons must be at most 10"),
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
  Maker: Yup.string()
    .required("Required field")
    .oneOf(makersList, "Maker is required"),
  Model: Yup.string().required("Model is required"),
  YearStart: Yup.number()
    .integer("Year must be an integer")
    .min(1970, "Year must be at least 1970")
    .max(2050, "Year must be at most 2050")
    .required("YearStart is required"),
  YearEnd: Yup.number()
    .integer("Year must be an integer")
    .min(1970, "Year must be at least 1970")
    .max(2050, "Year must be at most 2050")
    .required("YearEnd is required"),
  "Type of Ignition": Yup.string()
    .required("Required field")
    .oneOf(typeOfIgnitionList, "Type of Ignition is required"),
  "Type of Key": Yup.string()
    .required("Required field")
    .oneOf(typeOfKeyList, "Type of Key is required"),
  "No Buttons": Yup.number()
    .integer("No Buttons must be an integer")
    .min(1, "No Buttons must be at least 1")
    .max(10, "No Buttons must be at most 10")
    .required("No Buttons is required"),
  // "Price All Keys Lost": Yup.string(),
  // "Price Add a Key": Yup.string(),
  // "Price Program Only": Yup.string(),
  // "Dealer Price": Yup.string(),
  // "Dealer Program": Yup.string(),
  // "Dealer Emergency Blade": Yup.string(),
  // "Dealer Price Total": Yup.string(),
  // "Dealer Location": Yup.string(),
  // "Secure Locks Parts": Yup.string(),
  // "Part #": Yup.string(),
  // Link: Yup.string(),
  // Comments: Yup.string(),
});
