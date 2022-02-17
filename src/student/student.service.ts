import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  private students = students;

  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentResponseDto {
    return this.students.find((student) => {
      return student.id === studentId;
    });
  }

  createStudent(createStudentBody: CreateStudentDto): StudentResponseDto {
    const newStudent = {
      id: uuid(),
      ...createStudentBody,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(studentId: string, updateStudentBody: UpdateStudentDto) {
    let updateStudent: StudentResponseDto;
    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updateStudent = {
          id: studentId,
          ...updateStudentBody,
        };
        return updateStudent;
      } else {
        return student;
      }
    });
    this.students = updatedStudentList;
    return updateStudent;
  }

  getStudentsByTeacher(teacherId: string): FindStudentResponseDto[] {
    return this.students.filter((student) => {
      return student.teacher === teacherId;
    });
  }

  updateTeacherId(teacherId, studentId): StudentResponseDto {
    let updateStudent: StudentResponseDto;
    const updatedStudentList = this.students.map((student) => {
      if (student.id == studentId) {
        updateStudent = {
          ...student,
          teacher: teacherId,
        };
        return updateStudent;
      } else {
        return student;
      }
    });
    this.students = updatedStudentList;
    return updateStudent;
  }
}
