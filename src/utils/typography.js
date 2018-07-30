import Typography from 'typography'
//import bootstrapTheme from 'typography-theme-bootstrap'
//import lawtonTheme from 'typography-theme-lawton'
//import stardustTheme from 'typography-theme-stardust'
import fairyGateTheme from 'typography-theme-fairy-gates'


const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia"],
});

export default typography;