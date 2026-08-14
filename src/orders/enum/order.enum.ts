import { OrderStatus } from '../../../generated/prisma/client';

export const OrderStatusList = [
  OrderStatus.PENDING,
  OrderStatus.DELIVERED,
  OrderStatus.CANCELLED,
];
