import { Controller,Get, Post,Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }
  // 要告知使用http的哪一種請求作為decorator，getAllTasks方法才可以被執行=> 加上Get()
  @Get()
  getAllTasks():Task[] {
    return this.tasksService.getAllTasks()
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string
    ) {
    return this.tasksService.createTask(title,description)
  }
}
