// Base Types
export interface BaseEntity {
  id: string | number;
  createdAt?: Date;
  updatedAt?: Date;
}

// Project Types
export interface Project extends BaseEntity {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  status: "Live" | "Beta" | "Development" | "Archived";
  featured: boolean;
  priority?: number;
}

export interface ProjectCategory {
  id: string;
  name: string;
  count: number;
  color: string;
}

// Skill Types
export interface Skill {
  name: string;
  level: number;
  icon: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  skills: Skill[];
}

// Contact Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget?: string;
  timeline?: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  href: string;
  icon: string;
  color: string;
}

// Navigation Types
export interface NavLink {
  name: string;
  href: string;
  icon?: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  color?: string;
  followers?: string;
}

// Theme Types
export type Theme = "light" | "dark";

export interface ThemeConfig {
  theme: Theme;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
}

// Animation Types
export interface AnimationVariant {
  hidden: any;
  visible: any;
  exit?: any;
}

export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
  repeat?: number;
  repeatType?: "loop" | "reverse" | "mirror";
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "checkbox" | "radio";
  placeholder?: string;
  required?: boolean;
  validation?: ValidationRule[];
  options?: SelectOption[];
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ValidationRule {
  type: "required" | "email" | "minLength" | "maxLength" | "pattern";
  value?: any;
  message: string;
}

export interface FormState<T = any> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isValid: boolean;
  isSubmitting: boolean;
}

// API Types
export interface ApiResponse<T = any> {
  data: T;
  message: string;
  status: number;
  success: boolean;
}

export interface ApiError {
  message: string;
  status: number;
  code?: string;
  details?: any;
}

// Mouse and Cursor Types
export interface MousePosition {
  x: number;
  y: number;
}

export type CursorVariant = "default" | "hover" | "click" | "text" | "loading";

// Scroll Types
export interface ScrollState {
  scrollY: number;
  scrollProgress: number;
  direction: "up" | "down";
  isScrolled: boolean;
}

// Intersection Observer Types
export interface IntersectionObserverEntry {
  isIntersecting: boolean;
  intersectionRatio: number;
  boundingClientRect: DOMRectReadOnly;
  rootBounds: DOMRectReadOnly | null;
  target: Element;
  time: number;
}

// Window Size Types
export interface WindowSize {
  width: number;
  height: number;
}

export interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  image?: string;
  hover?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
}

// SEO Types
export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  url?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  locale?: string;
  siteName?: string;
}

export interface OpenGraphConfig {
  title: string;
  description: string;
  url: string;
  images: Array<{
    url: string;
    width: number;
    height: number;
    alt?: string;
  }>;
  locale: string;
  type: string;
  siteName: string;
}

export interface TwitterConfig {
  card: "summary" | "summary_large_image" | "app" | "player";
  site?: string;
  creator?: string;
  title: string;
  description: string;
  images: string[];
}

// Analytics Types
export interface AnalyticsEvent {
  type: string;
  data: Record<string, any>;
  timestamp: number;
  userId?: string;
  sessionId?: string;
}

export interface PageView {
  path: string;
  title: string;
  referrer?: string;
  timestamp: number;
}

export interface UserInteraction {
  type: "click" | "scroll" | "hover" | "form_submit" | "download";
  element: string;
  data?: Record<string, any>;
  timestamp: number;
}

// Error Types
export interface ErrorInfo {
  message: string;
  stack?: string;
  code?: string;
  statusCode?: number;
  timestamp: number;
  userId?: string;
  url?: string;
}

// Performance Types
export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactivityTime: number;
  cumulativeLayoutShift: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
}

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type NonEmptyArray<T> = [T, ...T[]];

export type ValueOf<T> = T[keyof T];

export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

// React Types Extensions
export type FC<P = {}> = React.FunctionComponent<P>;

export type PropsWithChildren<P = {}> = P & {
  children?: React.ReactNode;
};

export type ComponentWithAs<
  T extends React.ElementType,
  P = {}
> = React.ComponentPropsWithoutRef<T> & P;

// Event Handler Types
export type EventHandler<T = Element> = (
  event: React.SyntheticEvent<T>
) => void;

export type MouseEventHandler<T = Element> = (
  event: React.MouseEvent<T>
) => void;

export type KeyboardEventHandler<T = Element> = (
  event: React.KeyboardEvent<T>
) => void;

export type ChangeEventHandler<T = Element> = (
  event: React.ChangeEvent<T>
) => void;

export type FormEventHandler<T = Element> = (event: React.FormEvent<T>) => void;

// State Types
export interface AppState {
  theme: Theme;
  user: User | null;
  loading: boolean;
  error: string | null;
  notifications: Notification[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "user";
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: Theme;
  language: string;
  notifications: boolean;
  reducedMotion: boolean;
  autoPlayVideos: boolean;
}

export interface Notification {
  id: string;
  type: "info" | "success" | "warning" | "error";
  title: string;
  message: string;
  timestamp: number;
  read: boolean;
  actions?: NotificationAction[];
}

export interface NotificationAction {
  label: string;
  action: () => void;
  primary?: boolean;
}
