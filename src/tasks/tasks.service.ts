import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  // 屬性給private, 這樣在DI的時候，才不會讓他被外面的東西修改
  // 再回傳的東西上加上 :Task[]，表示回傳格式
  private tasks:Task[] = []

  getAllTasks():Task[] {
    return this.tasks;
  }
}
