import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TaskComponent } from './task-component/task-component.component';
import { TaskListComponent } from './task-list/tasklist.component';
import { TasksState } from '../state/task.state';
import { PureTaskListComponent } from './pure-task-list/pure-task-list.component';
import { PureInboxScreenComponent } from './pure-inbox-screen/pure-inbox-screen.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [TaskComponent, TaskListComponent],
  declarations: [TaskComponent, TaskListComponent, PureTaskListComponent, PureInboxScreenComponent],
  providers: [],
})
export class TaskModule {}