"use client";
import { CssBaseline, NextUIProvider, theme } from "@nextui-org/react";
import ProgressBar from "next-nprogress-bar";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import { Fragment, ReactNode } from "react";
import { dark, light } from "@/utils/theme";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <Fragment key="next-ui">{CssBaseline.flush()}</Fragment>
      <ThemeProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: light.className,
          dark: dark.className,
        }}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </ThemeProvider>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <ProgressBar
        height="4px"
        color={theme.colors.primary.value}
        options={{ showSpinner: false }}
        shallowRouting
        appDirectory
      />
    </>
  );
}
