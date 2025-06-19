package com.softwares.service;



import com.softwares.models.Order;
import com.softwares.models.PaymentOrder;
import com.softwares.models.User;

import java.util.List;
import java.util.Set;


public interface PaymentService {

    PaymentOrder createOrder(User user,
                             Set<Order> orders);

    PaymentOrder getPaymentOrderById(Long id) throws Exception;

    PaymentOrder getPaymentOrderByPaymentId(String paymentId) throws Exception;

}
