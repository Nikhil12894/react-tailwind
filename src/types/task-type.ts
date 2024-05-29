import { BaseType } from "./base-type";

export interface Task extends BaseType {
  id?: number;
  task_id: string;
  schedule: string;
  description: string;
  is_schedular_enabled: boolean;
}

export interface TaskList {
  tasks: Task[];
  total_pages: number;
  total: number;
  sort_order: string;
  sort_by: string;
}

export interface TaskRequest {
  id?: number;
  task_id: string;
  description?: string;
  is_schedular_enabled: boolean;
  schedule: string;
}

const taskShotBy = new Map<string, string>();

taskShotBy.set("id", "ID");
taskShotBy.set("task_id", "TASK_ID");
taskShotBy.set("description", "DESCRIPTION");
taskShotBy.set("none", "NONE");
taskShotBy.set("creation_date", "CREATION_DATE");
taskShotBy.set("last_update_date", "LAST_UPDATE_DATE");
taskShotBy.set("created_by", "CREATED_BY");
taskShotBy.set("last_updated_by", "LAST_UPDATED_BY");
taskShotBy.set("none", "NONE");

export const getTaskShotBy = (key: string) => taskShotBy.get(key);
