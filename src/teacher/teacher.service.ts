import { Injectable } from '@nestjs/common';
import { teachers, students } from 'src/db';
import { FindTeacherResponseDTO } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  private teachers = teachers;
  private students = students;

  getTeachers(): FindTeacherResponseDTO[] {
    return this.teachers;
  }

  getTeacherById(teacherId): FindTeacherResponseDTO {
    return this.teachers.find((teacher) => {
      return teacher.id === teacherId;
    });
  }
}
