import { Controller, Get, Put, Param, ParseUUIDPipe } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import {
  FindStudentResponseDto,
  StudentResponseDto,
} from '../student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getStudentsByTeacher(
    @Param('teacherId', ParseUUIDPipe) teacherId: string,
  ): FindStudentResponseDto[] {
    return this.studentService.getStudentsByTeacher(teacherId);
  }

  @Put('/:studentId')
  updateTeacherId(
    @Param('teacherId', ParseUUIDPipe) teacherId: string,
    @Param('studentId', ParseUUIDPipe) studentId: string,
  ): StudentResponseDto {
    return this.studentService.updateTeacherId(teacherId, studentId);
  }
}
