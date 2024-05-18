export interface Schedule {
  created_by?: number;
  creation_date?: Date | string;
  last_updated_by?: number;
  last_update_date?: Date | string;
  id?: number;
  schedule_id: string;
  cron_schedule: string;
}
