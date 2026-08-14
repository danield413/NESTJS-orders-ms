import { IsEnum, IsOptional } from 'class-validator';

import { OrderStatusList } from '../enum/order.enum';
import { OrderStatus } from '../../../generated/prisma/client';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Valid status are ${OrderStatusList}`,
  })
  status: OrderStatus;
}
