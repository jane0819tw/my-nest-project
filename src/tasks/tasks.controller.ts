import { Controller,Get, Post,Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import {CreateTaskDto} from './dto/create-task.dto'
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }
  // 要告知使用http的哪一種請求作為decorator，getAllTasks方法才可以被執行=> 加上Get()
  @Get()
  getAllTasks():Task[] {
    return this.tasksService.getAllTasks()
  }

  // 如果透過Body 新增欄位: createTask(@Body('title') title: string)
  @Post()
  createTask(
    @Body() createTaskDto: CreateTaskDto
    ):Task {
    return this.tasksService.createTask(createTaskDto)
  }
}
