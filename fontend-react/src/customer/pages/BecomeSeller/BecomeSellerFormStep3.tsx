import React from "react";
import { Grid, TextField } from "@mui/material";

interface BecomeSellerFormStep2Props {
  formik: any; // Replace 'any' with the correct type for formik instance
}

const BecomeSellerFormStep3: React.FC<BecomeSellerFormStep2Props> = ({ formik }) => {
  return (
    <div className="space-y-5">
       
          <TextField
            fullWidth
            name="bankDetails.accountNumber"
            label="Número de cuenta"
            autoFocus
            required
            value={formik.values.bankDetails.accountNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.bankDetails?.accountNumber && Boolean(formik.errors.bankDetails?.accountNumber)}
            helperText={formik.touched.bankDetails?.accountNumber && formik.errors.bankDetails?.accountNumber}
          />
          <TextField
            fullWidth
            name="bankDetails.ifscCode"
            label="Código de la sucursal bancaria"
            value={formik.values.bankDetails.ifscCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.bankDetails?.ifscCode && Boolean(formik.errors.bankDetails?.ifscCode)}
            helperText={formik.touched.bankDetails?.ifscCode && formik.errors.bankDetails?.ifscCode}
          />
          <TextField
            fullWidth
            name="bankDetails.accountHolderName"
            label="Nombre del titular de la cuenta"
            value={formik.values.bankDetails.accountHolderName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.bankDetails?.accountHolderName && Boolean(formik.errors.bankDetails?.accountHolderName)}
            helperText={formik.touched.bankDetails?.accountHolderName && formik.errors.bankDetails?.accountHolderName}
          />
    </div>
  );
};

export default BecomeSellerFormStep3;
