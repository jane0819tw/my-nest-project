import { Injectable } from '@nestjs/common';
import { Task ,TaskStatus} from './task.model';
import { v1 as uuid } from 'uuid';
@Injectable()
export class TasksService {
  // 屬性給private, 這樣在DI的時候，才不會讓他被外面的東西修改
  // 再回傳的東西上加上 :Task[]，表示回傳格式
  private tasks:Task[] = []

  getAllTasks():Task[] {
    return this.tasks;
  }

  createTask(title: string, description: string):Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN
    }
    this.tasks.push(task)
    return task
  }
}
