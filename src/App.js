import React from "react"
import { ThemeProvider } from "styled-components"
import Card from "./components/Card"
import GlobalStyles from "./components/Global"

const theme = {
  colors: {
    Dark_cyan: "hsl(185, 75%, 39%)",
    Very_dark_desaturated_blue: "hsl(229, 23%, 23%)",
    Dark_grayish_blue: "hsl(227, 10%, 46%)",
    Dark_gray: "hsl(0, 0%, 59%)",
  },
  fontSizes: {
    name_and_stats: "18px",
  },
  fontFamily: "'Kumbh Sans', sans-serif",
  mobile: "768px",
  mobile_sm: "400px",
}

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles></GlobalStyles>
        <Card></Card>
      </ThemeProvider>
    </>
  )
}

export default App
