import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField, Grid } from "@mui/material";
import OTPInput from "../../components/OtpFild/OTPInput";

// Validation schema


const BecomeSellerFormStep1 = ({ formik, handleOtpChange }: any) => {



    const handleResendOTP = () => {
        console.log("handle resend otp")
    }



    return (
        <Box  >
            <p className="text-xl font-bold text-center pb-9">Detalles de contacto</p>

            <div className="space-y-9">

                <TextField
                    fullWidth
                    name="mobile"
                    label="Movil"
                    autoFocus
                    required
                    inputProps={{
                            pattern: "^[0-9]{10}$"
                            }}
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                    helperText={formik.touched.mobile && formik.errors.mobile}
                />

                {/* <div className="space-y-2">
                    <p className="font-medium text-sm">
                        * Enter OTP sent to your mobile number
                    </p>
                    <OTPInput
                        length={6}
                        onChange={handleOtpChange}
                        error={false}
                    />
                    <p className="text-xs space-x-2">
                        Didn’t receive OTP?{" "}
                        <span onClick={handleResendOTP} className="text-teal-600 cursor-pointer hover:text-teal-800 font-semibold">
                            Resend OTP
                        </span>
                    </p>
                </div> */}

                <TextField
                    fullWidth
                    name="NIT"
                    label="Número NIT"
                    required
                    inputProps={{
                            pattern: "^[0-9]{10}$"
                            }}
                    value={formik.values.NIT}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.NIT && Boolean(formik.errors.NIT)}
                    helperText={formik.touched.NIT && formik.errors.NIT}
                />
            </div>


        </Box>
    );
};

export default BecomeSellerFormStep1;
