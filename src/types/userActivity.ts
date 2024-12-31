export type ActivityType = 'login' | 'logout' | 'update' | 'create' | 'delete';

export interface UserActivity {
  id: string;
  userId: number;
  type: ActivityType;
  description: string;
  timestamp: string;
  metadata?: {
    [key: string]: any;
  };
}