import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { MathService } from './math.service';

@Controller()
export class AppController {

  //create a logger instance
  private logger = new Logger('AppController');

  //inject mathservice
  constructor(private mathService: MathService) { }
  
  //map POST/ADD route
  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    console.log(data)
    this.logger.log('Adding' + data.toString());//log on every call
    return this.mathService.accumulate(data)//mathservice to calc result
  }

  
}
