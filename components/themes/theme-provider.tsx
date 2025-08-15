"use client";
import React from "react";
import { ThemeProvider as BaseThemeProvider } from "next-themes";
type ThemeProviderProps = {
  children: React.ReactNode;
};
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <BaseThemeProvider attribute="class" enableSystem defaultTheme="system">
      {children}
    </BaseThemeProvider>
  );
};

export default ThemeProvider;
