import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
interface ThemeState {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light";
        set({ theme: newTheme });
        document.documentElement.setAttribute("data-theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
      },
      setTheme: (theme) => {
        set({ theme });
        document.documentElement.setAttribute("data-theme", theme);
        document.documentElement.classList.toggle("dark", theme === "dark");
      },
    }),
    {
      name: "theme-storage",
    }
  )
);

// Navigation Store
interface NavigationState {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeSection: "home",
  setActiveSection: (section) => set({ activeSection: section }),
  isMenuOpen: false,
  setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
}));

// Scroll Store
interface ScrollState {
  scrollY: number;
  scrollProgress: number;
  isScrolled: boolean;
  setScrollY: (y: number) => void;
  setScrollProgress: (progress: number) => void;
  setIsScrolled: (isScrolled: boolean) => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
  scrollY: 0,
  scrollProgress: 0,
  isScrolled: false,
  setScrollY: (y) => set({ scrollY: y }),
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  setIsScrolled: (isScrolled) => set({ isScrolled }),
}));

// Mouse Store
interface MouseState {
  mousePosition: { x: number; y: number };
  cursorVariant: "default" | "hover" | "click";
  setMousePosition: (position: { x: number; y: number }) => void;
  setCursorVariant: (variant: "default" | "hover" | "click") => void;
}

export const useMouseStore = create<MouseState>((set) => ({
  mousePosition: { x: 0, y: 0 },
  cursorVariant: "default",
  setMousePosition: (position) => set({ mousePosition: position }),
  setCursorVariant: (variant) => set({ cursorVariant: variant }),
}));

// Contact Form Store
interface ContactFormState {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
    budget: string;
    timeline: string;
  };
  isSubmitting: boolean;
  submitStatus: "idle" | "loading" | "success" | "error";
  setFormData: (data: Partial<ContactFormState["formData"]>) => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
  setSubmitStatus: (status: ContactFormState["submitStatus"]) => void;
  resetForm: () => void;
}

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  budget: "",
  timeline: "",
};

export const useContactFormStore = create<ContactFormState>((set) => ({
  formData: initialFormData,
  isSubmitting: false,
  submitStatus: "idle",
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  setIsSubmitting: (isSubmitting) => set({ isSubmitting }),
  setSubmitStatus: (status) => set({ submitStatus: status }),
  resetForm: () => set({ formData: initialFormData, submitStatus: "idle" }),
}));

// Projects Store
interface ProjectsState {
  selectedProject: number | null;
  hoveredProject: number | null;
  filterCategory: string;
  setSelectedProject: (id: number | null) => void;
  setHoveredProject: (id: number | null) => void;
  setFilterCategory: (category: string) => void;
}

export const useProjectsStore = create<ProjectsState>((set) => ({
  selectedProject: null,
  hoveredProject: null,
  filterCategory: "all",
  setSelectedProject: (id) => set({ selectedProject: id }),
  setHoveredProject: (id) => set({ hoveredProject: id }),
  setFilterCategory: (category) => set({ filterCategory: category }),
}));

// Skills Store
interface SkillsState {
  activeCategory: string;
  hoveredSkill: string | null;
  setActiveCategory: (category: string) => void;
  setHoveredSkill: (skill: string | null) => void;
}

export const useSkillsStore = create<SkillsState>((set) => ({
  activeCategory: "languages",
  hoveredSkill: null,
  setActiveCategory: (category) => set({ activeCategory: category }),
  setHoveredSkill: (skill) => set({ hoveredSkill: skill }),
}));

// Loading Store
interface LoadingState {
  isLoading: boolean;
  loadingProgress: number;
  setIsLoading: (isLoading: boolean) => void;
  setLoadingProgress: (progress: number) => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: true,
  loadingProgress: 0,
  setIsLoading: (isLoading) => set({ isLoading }),
  setLoadingProgress: (progress) => set({ loadingProgress: progress }),
}));

// Preferences Store
interface PreferencesState {
  reducedMotion: boolean;
  soundEnabled: boolean;
  autoPlayAnimations: boolean;
  setReducedMotion: (reducedMotion: boolean) => void;
  setSoundEnabled: (soundEnabled: boolean) => void;
  setAutoPlayAnimations: (autoPlayAnimations: boolean) => void;
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      reducedMotion: false,
      soundEnabled: true,
      autoPlayAnimations: true,
      setReducedMotion: (reducedMotion) => set({ reducedMotion }),
      setSoundEnabled: (soundEnabled) => set({ soundEnabled }),
      setAutoPlayAnimations: (autoPlayAnimations) =>
        set({ autoPlayAnimations }),
    }),
    {
      name: "preferences-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// Analytics Store (for tracking interactions)
interface AnalyticsState {
  events: Array<{
    type: string;
    data: unknown;
    timestamp: number;
  }>;
  addEvent: (type: string, data: unknown) => void;
  clearEvents: () => void;
}

export const useAnalyticsStore = create<AnalyticsState>((set) => ({
  events: [],
  addEvent: (type, data) => {
    const event = {
      type,
      data,
      timestamp: Date.now(),
    };
    set((state) => ({
      events: [...state.events, event],
    }));
  },
  clearEvents: () => set({ events: [] }),
}));

// Combined store selector helpers
export const useAppStore = () => ({
  theme: useThemeStore(),
  navigation: useNavigationStore(),
  scroll: useScrollStore(),
  mouse: useMouseStore(),
  contactForm: useContactFormStore(),
  projects: useProjectsStore(),
  skills: useSkillsStore(),
  loading: useLoadingStore(),
  preferences: usePreferencesStore(),
  analytics: useAnalyticsStore(),
});
