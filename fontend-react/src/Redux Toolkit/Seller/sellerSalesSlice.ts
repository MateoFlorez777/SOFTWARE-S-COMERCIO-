import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Config/Api"; // Usamos instancia con baseURL
import { RootState } from "../Store";
import { SoldItemDto } from "../../types/SoldItemDto";

interface SellerSalesState {
  loading: boolean;
  soldItems: SoldItemDto[];
  totalEarnings: number;  // Ganancias totales
  totalSales: number;     // Ventas totales
  error: string | null;
}

const initialState: SellerSalesState = {
  loading: false,
  soldItems: [],
  totalEarnings: 0,
  totalSales: 0,
  error: null,
};

export const fetchSellerSales = createAsyncThunk<any, void>(
  "sellerSales/fetchSellerSales",
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem("jwt");

    try {
      const response = await api.get("/sellers/sold-items", {
        headers: {
          Authorization: `Bearer ${token}`, // ← MUY IMPORTANTE
        },
      });
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      return rejectWithValue("Error al cargar ventas");
    }
  }
);

const sellerSalesSlice = createSlice({
  name: "sellerSales",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSellerSales.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSellerSales.fulfilled, (state, action) => {
        state.loading = false;
        state.soldItems = action.payload;

        // Calcular ganancias totales y ventas totales
        const totalEarnings = action.payload.reduce(
          (acc: number, item: SoldItemDto) => acc + item.price * item.quantity, 0
        );
        const totalSales = action.payload.reduce(
          (acc: number, item: SoldItemDto) => acc + item.quantity, 0
        );

        // Guardar resultados en el estado
        state.totalEarnings = totalEarnings;
        state.totalSales = totalSales;
      })
      .addCase(fetchSellerSales.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const selectSellerSales = (state: RootState) => state.sellerSales;
export default sellerSalesSlice.reducer;
