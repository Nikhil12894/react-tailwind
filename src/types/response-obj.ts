export interface WebResponse<T> {
  data: T;
  message: string;
  errors: string[];
}
