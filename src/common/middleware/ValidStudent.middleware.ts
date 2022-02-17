import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { students } from '../../db';

@Injectable()
export class ValidStudentMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const studentId = req.params.studentId;
    const studentExist = students.some((student) => {
      return student.id === studentId;
    });
    if (!studentExist) {
      throw new HttpException(' Student Not Found', 400);
    }
    next();
  }
}
