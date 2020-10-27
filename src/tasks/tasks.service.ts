import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  // 屬性給private, 這樣在DI的時候，才不會讓他被外面的東西修改
  private tasks = []

  getAllTasks() {
    return this.tasks;
  }
}
