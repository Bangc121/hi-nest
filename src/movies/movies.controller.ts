import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-moive.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // url 의 entry point를 결정한다
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie with a title ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id') // put은 모든 리소스를 업데이트 하기 때문에 Patch는 일부분만 업데이트
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}


// 테스트와 관련된게 5개가있다.
// jest가 spec.ts파일들을 찾아볼수있도록 설정되어있어
// npm run test:cov -> 모든 spec.ts 파일들을 찾아서 몇 줄이 테스팅되었는지 알려준다.
// 유닛 테스트 모든 function을 따로 테스트하는것
// 두가지의 테스팅 종류 유닛테스트
// 서비스에서 분리된 유닛을 테스트하는걸 말해
// 또다른 하나는 end-to-end(e2e)인데 모든 시스템을 테스트
// 유닛테스팅은 getall() function 하나를 테스트할때 사용
