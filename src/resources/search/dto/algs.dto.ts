import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, IsNumber } from 'class-validator';
import { linearSearchString } from '@core/constants';

export class ArraySearchDto {
  @ApiProperty({
    name: 'array',
    description: 'Массив, в рамках которого будет происходить поиск',
    example: [1, 2, 3],
    isArray: true,
    type: Number,
  })
  @IsNumber({}, { each: true })
  @ArrayMaxSize(1000000)
  array: Array<number>;

  @ApiProperty({
    name: 'item',
    description: 'Искомый элемент',
    example: 2,
    type: Number,
  })
  @IsNumber()
  item: number;
}

export class ArraySearchResponse {
  @ApiProperty({
    name: 'result',
    description: 'Результат выполнения алгоритма',
    nullable: true,
    example: 1,
  })
  result: number | null;
  @ApiProperty({
    name: 'iterationCount',
    description: 'Количество итераций, затраченных на поиск элемента',
    example: 2,
  })
  iterationCount: number;
  @ApiProperty({
    name: 'code',
    description: 'Код алгоритма',
    example: linearSearchString,
  })
  code: string;
  @ApiProperty({
    name: 'ms',
    description: 'Затраченное время',
    example: 10,
  })
  ms: number;
}
