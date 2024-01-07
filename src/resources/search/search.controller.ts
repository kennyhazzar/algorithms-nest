import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { SearchService } from './search.service';
import { ArraySearchDto, ArraySearchResponse } from './dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  binarySearchIterableString,
  linearSearchString,
} from '@core/constants';
import { ThrottlerBehindProxyGuard } from '@core/guards';

@Controller('search')
@ApiTags('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post('linear')
  @ApiOperation({
    summary: 'Линейный поиск',
    description: linearSearchString,
  })
  @ApiResponse({
    type: ArraySearchResponse,
    status: HttpStatus.OK,
  })
  @UseGuards(ThrottlerBehindProxyGuard)
  @HttpCode(HttpStatus.OK)
  linearSearch(@Body() { array, item }: ArraySearchDto): ArraySearchResponse {
    return this.searchService.evaluateSearch(array, item, 'linear');
  }

  @Post('binary')
  @ApiOperation({
    summary: 'Бинарный поиск (итерации)',
    description: binarySearchIterableString,
  })
  @ApiResponse({
    type: ArraySearchResponse,
    status: HttpStatus.OK,
  })
  @UseGuards(ThrottlerBehindProxyGuard)
  @HttpCode(HttpStatus.OK)
  binaryIterable(@Body() { array, item }: ArraySearchDto): ArraySearchResponse {
    return this.searchService.evaluateSearch(array, item, 'binary-iterable');
  }
}
