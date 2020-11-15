import { Injectable } from '@nestjs/common';
import { Task ,TaskStatus} from './task.model';
import { v1 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto'
import {GetTasksFilterDto} from './dto/get-tasks-filter.dto'
@Injectable()
export class TasksService {
  // 屬性給private, 這樣在DI的時候，才不會讓他被外面的東西修改
  // 再回傳的東西上加上 :Task[]，表示回傳格式
  private tasks:Task[] = []

  getAllTasks():Task[] {
    return this.tasks;
  }
  getTasksWithFilters(filterDto:GetTasksFilterDto) {
    const { status, search } = filterDto;
    let tasks = this.getAllTasks()
    if (status) {
      tasks = tasks.filter(task=>task.status===status)
    }
    if (search) {
      tasks = tasks.filter(task=>task.title.includes(search)||task.description.includes(search))
    }
    return tasks
  }
  getTaskById(id: string):Task{ 
    return this.tasks.find(task=>task.id === id)
  }
  // "return type = void" means not return 
  deleteTask(id: string): void{
    this.tasks = this.tasks.filter(task=>task.id!=id)
    // let index = this.tasks.findIndex(task => task.id === id)
    // return this.tasks.splice(index,1)[0]
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const {title,description} = createTaskDto
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN
    }
    this.tasks.push(task)
    return task
  }

  updateTaskStatus(id: string, status: TaskStatus):Task {
    let task = this.getTaskById(id);
    task.status = status;
    return task
  }
}
