"use client";
import { createContext, useContext, ReactNode } from "react";

interface ToastOptions {
  title: string;
  description: string;
}

interface ToastContextType {
  toast: (options: ToastOptions) => void;
}

// Export ToastContext to ensure it can be referenced elsewhere if needed
export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

// Example ToastProvider implementation (ensure this exists in your app)
export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const toast = (options: ToastOptions) => {
    console.log("Toast:", options.title, options.description);
    // Add actual toast implementation here (e.g., using a toast library)
  };

  return <ToastContext.Provider value={{ toast }}>{children}</ToastContext.Provider>;
};