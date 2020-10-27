import { Controller,Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }
  // 要告知使用http的哪一種請求作為decorator，getAllTasks方法才可以被執行=> 加上Get()
  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks()
  }
}
