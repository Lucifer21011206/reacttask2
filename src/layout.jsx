import React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./theme"

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </React.Fragment>
  )
}

