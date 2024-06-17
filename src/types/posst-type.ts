import { BaseType } from "./base-type";

export interface Post extends BaseType {
  id: number;
  title: string;
  content: string;
  published_at: Date | string;
  status: PostStatus;
  featuredImage: string;
}

export enum PostStatus {
  draft,
  published,
  archived,
}

export interface PostRequest {
  id?: number;
  title: string;
  content: string;
  published_at: Date | string;
  status: PostStatus;
  featuredImage: string;
}

export interface PostsDTO {
  postDTOs: Post[];
  total_pages: number;
  total: number;
  sort_order: string;
  sort_by: string;
}

const postShortBy = new Map<string, string>();

postShortBy.set("id", "ID");
postShortBy.set("title", "TITLE");
postShortBy.set("creation_date", "CREATION_DATE");
postShortBy.set("last_update_date", "LAST_UPDATE_DATE");
postShortBy.set("created_by", "CREATED_BY");
postShortBy.set("last_updated_by", "LAST_UPDATED_BY");
postShortBy.set("none", "NONE");

export const getPostShotBy = (key: string) => postShortBy.get(key);
