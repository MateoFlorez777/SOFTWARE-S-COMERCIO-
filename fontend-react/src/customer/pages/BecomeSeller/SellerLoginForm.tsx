import { Alert, Button, CircularProgress, Snackbar, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OTPInput from '../../components/OtpFild/OTPInput'
import { FormikValues, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../Redux Toolkit/Store';
import { sendLoginOtp, verifyLoginOtp } from '../../../Redux Toolkit/Seller/sellerAuthenticationSlice';
import { useNavigate } from 'react-router-dom';

const SellerLoginForm = () => {

    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false)
    const [timer, setTimer] = useState<number>(30); // Timer state
    const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
    const dispatch=useAppDispatch();
    const {sellerAuth}=useAppSelector(store=>store)

    const formik = useFormik({
        initialValues: {
            email: '',
            otp: ''
        },
        
        onSubmit: (values: any) => {
            // Handle form submission
            dispatch(verifyLoginOtp({email:values.email, otp, navigate}))
            console.log('Form data:', values);
        }
    });

    const handleOtpChange = (otp: any) => {

        setOtp(otp);

    };

    const handleResendOTP = () => {
        // Implement OTP resend logic
        dispatch(sendLoginOtp(formik.values.email))
        console.log('Reenviar OTP');
        setTimer(30);
        setIsTimerActive(true);
    };

    const handleSentOtp=()=>{
        setIsOtpSent(true);
        handleResendOTP();
    }

    const handleLogin=()=>{
        formik.handleSubmit()
    }

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        if (isTimerActive) {
            interval = setInterval(() => {
                setTimer(prev => {
                    if (prev === 1) {
                        clearInterval(interval);
                        setIsTimerActive(false);
                        return 30; // Reset timer for next OTP request
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isTimerActive]);


    return (
        <div>
            <h1 className='text-center font-bold text-xl text-primary-color pb-5'>Iniciar sesión como vendedor</h1>
            <form className="space-y-5">

                <TextField
                    fullWidth
                    name="email"
                    label="Ingrese su correo electrónico"
                    autoFocus
                    required
                    inputProps={{
                            pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                            }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email ? formik.errors.email as string : undefined}
                />

                {sellerAuth.otpSent && <div className="space-y-2">
                    <p className="font-medium text-sm">
                        * Ingrese el OTP enviado a su correo electrónico
                    </p>
                    <OTPInput
                        length={6}
                        onChange={handleOtpChange}
                        error={false}
                    />
                    <p className="text-xs space-x-2">
                            {isTimerActive ? (
                                <span>Reenviar OTP en {timer} segundos</span>
                            ) : (
                                <>
                                    Didn’t receive OTP?{" "}
                                    <span 
                                        onClick={handleResendOTP} 
                                        className="text-teal-600 cursor-pointer hover:text-teal-800 font-semibold"
                                    >
                                        Reenviar OTP
                                    </span>
                                </>
                            )}
                        </p>
                    {formik.touched.otp && formik.errors.otp && <p>{formik.errors.otp as string}</p>}
                </div>}

                {sellerAuth.otpSent &&<div>
                    <Button onClick={handleLogin} 
                    fullWidth variant='contained' sx={{ py: "11px" }}>Iniciar sesión</Button>
                </div>}

                {!sellerAuth.otpSent && <Button
                disabled={sellerAuth.loading} 
                fullWidth 
                variant='contained' 
                onClick={handleSentOtp}
                sx={{ py: "11px" }}>{
                    sellerAuth.loading ? <CircularProgress  />: "Enviar OTP"}</Button>
                }



            </form>


            
        </div>
    )
}

export default SellerLoginForm