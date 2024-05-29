import { Schedule } from "@/types/schedule-type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createSchedule,
  createTask,
  deleteSchedule,
  deleteTask,
  updateSchedule,
  updateTask,
} from "./api";
import { Task } from "@/types/task-type";
const SCHEDULE_QUERY_KEY = "schedule_data";
const TASK_QUERY_KEY = "task_data";
export function useCreateSchedule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Schedule) => createSchedule(data),
    onMutate: () => {
      console.log("mutate");
    },

    onError: () => {
      console.log("error");
    },

    onSuccess: () => {
      console.log("success");
    },

    onSettled: async (_, error) => {
      console.log("settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: [SCHEDULE_QUERY_KEY] });
      }
    },
  });
}

export function useUpdateSchedule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Schedule) => updateSchedule(data),
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: [SCHEDULE_QUERY_KEY] });
      }
    },
  });
}

export function useDeleteSchedule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: string) => deleteSchedule(data),
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: [SCHEDULE_QUERY_KEY] });
      }
    },
  });
}

// Task Mutations

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Task) => createTask(data),

    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: [TASK_QUERY_KEY] });
      }
    },
  });
}

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Task) => updateTask(data),
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: [TASK_QUERY_KEY] });
      }
    },
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: number) => deleteTask(data),
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: [TASK_QUERY_KEY] });
      }
    },
  });
}
