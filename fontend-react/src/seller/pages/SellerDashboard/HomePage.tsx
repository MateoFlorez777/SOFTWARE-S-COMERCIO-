import React, { useEffect } from "react";
import Demo from "../../components/Demo/Demo";
import SellingChart from "./SellingChart";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { fetchSellerReport } from "../../../Redux Toolkit/Seller/sellerSlice";
import ReportCard from "./Report/ReportCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import {
  Box,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const Chart = [
  { name: "Hoy", value: "today" },
  { name: "Últimos 7 días", value: "daily" },
  { name: "Últimos 12 meses", value: "monthly" },
];

const HomePage = () => {
  const { sellers } = useAppSelector((store) => store);
  const dispatch = useAppDispatch();
  const [chartType, setChartType] = React.useState(Chart[0].value);

  useEffect(() => {
    dispatch(fetchSellerReport(localStorage.getItem("jwt") || ""));
  }, []);



  const handleChange = (event: SelectChangeEvent) => {
    setChartType(event.target.value as string);
  };
  return (
<div className="flex justify-center items-start mt-40">
  <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl px-4">
    <div className="flex justify-center">
      <ReportCard
        icon={<AccountBalanceIcon fontSize="large" />}
        value={"$" + sellers.report?.totalEarnings}
        title={"Ganancias totales"}
      />
    </div>
    <div className="flex justify-center">
      <ReportCard
        icon={<AccountBalanceIcon fontSize="large" />}
        value={sellers.report?.totalSales}
        title={"Ventas totales"}
      />
    </div>
  </section>
</div>


  );
};

export default HomePage;
