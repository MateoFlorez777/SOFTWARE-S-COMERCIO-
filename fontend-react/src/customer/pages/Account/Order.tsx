import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import { fetchOrders } from "../../../Redux Toolkit/Customer/OrderSlice";
import OrderItemCard from "../../../customer/pages/Account/OrderItemCard";

const Orders = () => {
  const dispatch = useAppDispatch();
  const { orders, loading, error } = useAppSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Mis Pedidos</h2>

      {loading && <p className="text-gray-700">Cargando...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {orders.length === 0 && !loading && (
        <p className="text-gray-500 text-center">No tienes pedidos todavía.</p>
      )}

      {orders.map((order: any) => (
        <div
          key={order.id}
          className="bg-white shadow-md rounded-lg p-4 mb-6 border border-gray-200"
        >
          <div className="mb-2 flex justify-between items-center">
            <p className="text-lg font-semibold">Orden #{order.id}</p>
            <span
              className={`text-sm font-medium px-2 py-1 rounded ${
                order.paymentStatus === "PAID"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {order.paymentStatus === "PAID" ? "Pagado" : "Pendiente"}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-2">
            Total: <strong>${order.totalAmount}</strong>
          </p>

          {order.orderItems?.length > 0 ? (
            <div className="space-y-3 mt-3">
              {order.orderItems.map((item: any, index: number) => (
                <OrderItemCard key={index} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 italic">Sin productos.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Orders;
