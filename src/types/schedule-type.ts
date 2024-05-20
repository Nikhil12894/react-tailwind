export interface Schedule {
  created_by?: number;
  creation_date?: Date | string;
  last_updated_by?: number;
  last_update_date?: Date | string;
  id?: number;
  schedule_id: string;
  cron_schedule: string;
}

export interface ScheduleDTOList {
  scheduleDTOs: Schedule[];
  total_pages: number;
  total: number;
  sort_order: string;
  sort_by: string;
}

const scheduleShotBy = new Map<string, string>();

scheduleShotBy.set("id", "ID");
scheduleShotBy.set("schedule_id", "SCHEDULE_ID");
scheduleShotBy.set("cron_schedule", "CRON_SCHEDULE");
scheduleShotBy.set("creation_date", "CREATION_DATE");
scheduleShotBy.set("last_update_date", "LAST_UPDATE_DATE");
scheduleShotBy.set("created_by", "CREATED_BY");
scheduleShotBy.set("last_updated_by", "LAST_UPDATED_BY");
scheduleShotBy.set("none", "NONE");

export const getShotBy = (key: string) => scheduleShotBy.get(key);
