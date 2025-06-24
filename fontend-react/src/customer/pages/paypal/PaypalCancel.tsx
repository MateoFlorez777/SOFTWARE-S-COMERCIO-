import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaypalCancel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    alert("El pago fue cancelado.");
    navigate("/cart");
  }, []);

  return <div>Pago cancelado</div>;
};

export default PaypalCancel;
