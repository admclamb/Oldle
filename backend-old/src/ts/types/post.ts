export type Post = {
  post_id: number;
  title: string;
  body: string;
  header_image_url: string | null;
  tags: string[];
  author_id: number;
  created_at: Date;
  updated_at: Date;
};
