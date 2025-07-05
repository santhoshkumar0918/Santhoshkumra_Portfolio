// "use client";

// import { useState, useEffect } from "react";
// import { Sun, Moon } from "lucide-react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// export function ThemeToggle() {
//   const [theme, setTheme] = useState("dark");

//   useEffect(() => {
//     // Set initial theme
//     document.documentElement.setAttribute("data-theme", theme);
//     document.documentElement.classList.toggle("dark", theme === "dark");
//   }, [theme]);

//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//     console.log("Theme toggled to:", newTheme); // Debug log
//   };

//   return (
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={toggleTheme}
//       className="relative text-gray-300 hover:text-white transition-colors"
//     >
//       <motion.div
//         initial={false}
//         animate={{ rotate: theme === "dark" ? 0 : 180 }}
//         transition={{ duration: 0.3 }}
//       >
//         {theme === "dark" ? (
//           <Sun className="h-5 w-5" />
//         ) : (
//           <Moon className="h-5 w-5" />
//         )}
//       </motion.div>
//       <span className="sr-only">Toggle theme</span>
//     </Button>
//   );
// }
