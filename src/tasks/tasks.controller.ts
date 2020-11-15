import { Controller,Get, Post,Body ,Param,Delete, Patch, Query} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import {CreateTaskDto} from './dto/create-task.dto'
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }
  // 要告知使用http的哪一種請求作為decorator，getAllTasks方法才可以被執行=> 加上Get()
  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    if (Object.keys(filterDto).length === 0) {
      return this.tasksService.getAllTasks()
    } else {
      return this.tasksService.getTasksWithFilters(filterDto)
    }
      
  }

  @Get('/:id')
  getTaskById(@Param('id') id:string):Task {
    return this.tasksService.getTaskById(id)
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string):void {
    return this.tasksService.deleteTask(id)
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string, @Body('status') status: TaskStatus
  ):Task {
    return this.tasksService.updateTaskStatus(id,status)
  }

  // 如果透過Body 新增欄位: createTask(@Body('title') title: string)
  @Post()
  createTask(
    @Body() createTaskDto: CreateTaskDto
    ):Task {
    return this.tasksService.createTask(createTaskDto)
  }
}
