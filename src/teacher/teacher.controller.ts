import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { FindTeacherResponseDTO } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  @Get()
  getAllTeachers(): FindTeacherResponseDTO[] {
    return this.teacherService.getTeachers();
  }

  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId', ParseUUIDPipe) teacherId: string,
  ): FindTeacherResponseDTO {
    return this.teacherService.getTeacherById(teacherId);
  }
}
