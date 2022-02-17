import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ValidStudentMiddleWare } from '../common/middleware/ValidStudent.middleWare';
import { StudentController } from './student.contoller';
import { StudentService } from './student.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidStudentMiddleWare).forRoutes({
      path: 'students/:studentId',
      method: RequestMethod.GET,
    });
    consumer.apply(ValidStudentMiddleWare).forRoutes({
      path: 'students/:studentId',
      method: RequestMethod.PUT,
    });
  }
}
