// Typescript declarations for Apex class and module.
// Note: When you have a class and a module with the same name; the module is merged
// with the class.  This is necessary since apexcharts exports the main ApexCharts class only.
//
// This is a sparse typed declarations of chart interfaces.  See Apex Chart documentation
// for comprehensive API:  https://apexcharts.com/docs/options
//
// There is on-going work to provide a comprehensive typed definition for this component.
// See https://github.com/DefinitelyTyped/DefinitelyTyped/pull/28733

declare class ApexCharts {
  constructor(el: any, options: any)
  render(): Promise<void>
  updateOptions(
    options: any,
    redrawPaths?: boolean,
    animate?: boolean,
    updateSyncedCharts?: boolean
  ): Promise<void>
  updateSeries(
    newSeries: ApexAxisChartSeries | ApexNonAxisChartSeries,
    animate?: boolean
  ): void
  appendSeries(
    newSeries: ApexAxisChartSeries | ApexNonAxisChartSeries,
    animate?: boolean
  ): void
  toggleSeries(seriesName: string): any
  showSeries(seriesName: string): void
  hideSeries(seriesName: string): void
  resetSeries(): void
  zoomX(min: number, max: number): void
  toggleDataPointSelection(seriesIndex: number, dataPointIndex?: number): any
  destroy(): void
  setLocale(localeName: string): void
  paper(): void
  addXaxisAnnotation(options: any, pushToMemory?: boolean, context?: any): void
  addYaxisAnnotation(options: any, pushToMemory?: boolean, context?: any): void
  addPointAnnotation(options: any, pushToMemory?: boolean, context?: any): void
  removeAnnotation(id: string, options?: any): void
  clearAnnotations(options?: any): void
  dataURI(): Promise<void>
  static exec(chartID: string, fn: string, options?: any): any
  static initOnLoad(): void
}

declare module ApexCharts {
  export interface ApexOptions {
    annotations?: ApexAnnotations
    chart?: ApexChart
    colors?: any[]
    dataLabels?: ApexDataLabels
    fill?: ApexFill
    grid?: ApexGrid
    labels?: string[]
    legend?: ApexLegend
    markers?: ApexMarkers
    noData?: ApexNoData
    plotOptions?: ApexPlotOptions
    responsive?: ApexResponsive[]
    series?: ApexAxisChartSeries | ApexNonAxisChartSeries
    states?: ApexStates
    stroke?: ApexStroke
    subtitle?: ApexTitleSubtitle
    theme?: ApexTheme
    title?: ApexTitleSubtitle
    tooltip?: ApexTooltip
    xaxis?: ApexXAxis
    yaxis?: ApexYAxis | ApexYAxis[]
  }
}

type ApexDropShadow = {
  enabled?: boolean
  top?: number
  left?: number
  blur?: number
  opacity?: number
  color?: string
}

/**
 * Main Chart options
 * See https://apexcharts.com/docs/options/chart/
 */
type ApexChart = {
  width?: string | number
  height?: string | number
  type?:
    | 'line'
    | 'area'
    | 'bar'
    | 'histogram'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'candlestick'
    | 'radar'
    | 'polarArea'
    | 'rangeBar'
  foreColor?: string
  fontFamily?: string
  background?: string
  offsetX?: number
  offsetY?: number
  dropShadow?: ApexDropShadow & {
    enabledOnSeries?: undefined | number[]
    color?: string | string[]
  }
  events?: {
    animationEnd?(chart: any, options?: any): void
    beforeMount?(chart: any, options?: any): void
    mounted?(chart: any, options?: any): void
    updated?(chart: any, options?: any): void
    mouseMove?(e: any, chart?: any, options?: any): void
    click?(e: any, chart?: any, options?: any): void
    legendClick?(chart: any, seriesIndex?: number, options?: any): void
    markerClick?(e: any, chart?: any, options?: any): void
    selection?(chart: any, options?: any): void
    dataPointSelection?(e: any, chart?: any, options?: any): void
    dataPointMouseEnter?(e: any, chart?: any, options?: any): void
    dataPointMouseLeave?(e: any, chart?: any, options?: any): void
    beforeZoom?(chart: any, options?: any): void
    zoomed?(chart: any, options?: any): void
    scrolled?(chart: any, options?: any): void
  }
  brush?: {
    enabled?: boolean
    autoScaleYaxis?: boolean
    target?: string
  }
  id?: string
  group?: string
  locales?: ApexLocale[]
  defaultLocale?: string
  parentHeightOffset?: number
  redrawOnParentResize?: boolean
  sparkline?: {
    enabled?: boolean
  }
  stacked?: boolean
  stackType?: 'normal' | '100%'
  toolbar?: {
    show?: boolean
    offsetX?: number
    offsetY?: number
    tools?: {
      download?: boolean | string
      selection?: boolean | string
      zoom?: boolean | string
      zoomin?: boolean | string
      zoomout?: boolean | string
      pan?: boolean | string
      reset?: boolean | string
      customIcons?: {
        icon?: string
        title?: string
        index?: number
        class?: string
        click?(chart?: any, options?: any, e?: any): any
      }[]
    }
    export?: {
      csv?: {
        filename?: undefined | string
        columnDelimiter?: string
        headerCategory?: string
        headerValue?: string
        dateFormatter?(timestamp?: number): any
      }
    }
    autoSelected?: 'zoom' | 'selection' | 'pan'
  }
  zoom?: {
    enabled?: boolean
    type?: 'x' | 'y' | 'xy'
    autoScaleYaxis?: boolean
    zoomedArea?: {
      fill?: {
        color?: string
        opacity?: number
      }
      stroke?: {
        color?: string
        opacity?: number
        width?: number
      }
    }
  }
  selection?: {
    enabled?: boolean
    type?: string
    fill?: {
      color?: string
      opacity?: number
    }
    stroke?: {
      width?: number
      color?: string
      opacity?: number
      dashArray?: number
    }
    xaxis?: {
      min?: number
      max?: number
    }
    yaxis?: {
      min?: number
      max?: number
    }
  }
  animations?: {
    enabled?: boolean
    easing?: 'linear' | 'easein' | 'easeout' | 'easeinout'
    speed?: number
    animateGradually?: {
      enabled?: boolean
      delay?: number
    }
    dynamicAnimation?: {
      enabled?: boolean
      speed?: number
    }
  }
}

type ApexStates = {
  normal?: {
    filter?: {
      type?: string
      value?: number
    }
  }
  hover?: {
    filter?: {
      type?: string
      value?: number
    }
  }
  active?: {
    allowMultipleDataPointsSelection?: boolean
    filter?: {
      type?: string
      value?: number
    }
  }
}

/**
 * Chart Title options
 * See https://apexcharts.com/docs/options/title/
 */
type ApexTitleSubtitle = {
  text?: string
  align?: 'left' | 'center' | 'right'
  margin?: number
  offsetX?: number
  offsetY?: number
  floating?: boolean
  style?: {
    fontSize?: string
    fontFamily?: string
    fontWeight?: string | number
    color?: string
  }
}

/**
 * Chart Series options.
 * Use ApexNonAxisChartSeries for Pie and Donut charts.
 * See https://apexcharts.com/docs/options/series/
 *
 * According to the documentation at
 * https://apexcharts.com/docs/series/
 * Section 1: data can be a list of single numbers
 * Sections 2.1 and 3.1: data can be a list of tuples of two numbers
 * Sections 2.2 and 3.2: data can be a list of objects where x is a string
 * and y is a number
 * And according to the demos, data can contain null.
 * https://apexcharts.com/javascript-chart-demos/line-charts/null-values/
 */
type ApexAxisChartSeries = {
  name?: string
  type?: string
  data:
    | (number | null)[]
    | { x: any; y: any, fillColor?: string, strokeColor?: string }[]
    | [number, (number | null)][]
    | [number, (number | null)[]][]
}[]

type ApexNonAxisChartSeries = number[]

/**
 * Options for the line drawn on line and area charts.
 * See https://apexcharts.com/docs/options/stroke/
 */
type ApexStroke = {
  show?: boolean
  curve?: 'smooth' | 'straight' | 'stepline' | ('smooth' | 'straight' | 'stepline')[]
  lineCap?: 'butt' | 'square' | 'round'
  colors?: string[]
  width?: number | number[]
  dashArray?: number | number[]
}

type ApexAnnotations = {
  position?: string
  yaxis?: YAxisAnnotations[]
  xaxis?: XAxisAnnotations[]
  points?: PointAnnotations[]
  shapes?: ShapeAnnotations[]
  texts?: TextAnnotations[]
  images?: ImageAnnotations[]
}

type AnnotationLabel = {
  borderColor?: string
  borderWidth?: number
  borderRadius?: number
  text?: string
  textAnchor?: string
  offsetX?: number
  offsetY?: number
  style?: AnnotationStyle
  position?: string
  orientation?: string
}

type AnnotationStyle = {
  background?: string
  color?: string
  fontFamily?: string
  fontWeight?: string | number
  fontSize?: string
  cssClass?: string
  padding?: {
    left?: number
    right?: number
    top?: number
    bottom?: number
  }
}

type XAxisAnnotations = {
  x?: null | number | string
  x2?: null | number | string
  strokeDashArray?: number
  fillColor?: string
  borderColor?: string
  borderWidth?: number
  opacity?: number
  offsetX?: number
  offsetY?: number
  label?: AnnotationLabel
}

type YAxisAnnotations = {
  y?: null | number | string
  y2?: null | number | string
  strokeDashArray?: number
  fillColor?: string
  borderColor?: string
  borderWidth?: number
  opacity?: number
  offsetX?: number
  offsetY?: number
  yAxisIndex?: number
  label?: AnnotationLabel
}

type PointAnnotations = {
  x?: number | string
  y?: null | number
  yAxisIndex?: number
  seriesIndex?: number
  marker?: {
    size?: number
    fillColor?: string
    strokeColor?: string
    strokeWidth?: number
    shape?: string
    offsetX?: number
    offsetY?: number
    radius?: number
    cssClass?: string
  }
  label?: AnnotationLabel
  image?: {
    path?: string
    width?: number
    height?: number
    offsetX?: number
    offsetY?: number
  }
}

type ShapeAnnotations = {
  x?: number
  y?: number
  x1?: number
  y1?: number
  lineColor?: string
  dashArray?: number
  strokeWidth?: number
  type?: string
  width?: number | string
  height?: number
  backgroundColor?: string
  opacity?: number
  borderWidth?: number
  borderRadius?: number
  borderColor?: string
}

type TextAnnotations = {
  x?: number
  y?: number
  text?: string
  textAnchor?: string
  foreColor?: string
  fontSize?: string | number
  fontFamily?: undefined | string
  fontWeight?: string | number
  backgroundColor?: string
  borderColor?: string
  borderRadius?: number
  borderWidth?: number
  paddingLeft?: number
  paddingRight?: number
  paddingTop?: number
  paddingBottom?: number
}

type ImageAnnotations = {
  path?: string
  x?: number,
  y?: number,
  width?: number,
  height?: number,
}

/**
 * Options for localization.
 * See https://apexcharts.com/docs/options/chart/locales
 */
type ApexLocale = {
  name?: string
  options?: {
    months?: string[]
    shortMonths?: string[]
    days?: string[]
    shortDays?: string[]
    toolbar?: {
      download?: string
      selection?: string
      selectionZoom?: string
      zoomIn?: string
      zoomOut?: string
      pan?: string
      reset?: string
    }
  }
}

/**
 * PlotOptions for specifying chart-type-specific configuration.
 * See https://apexcharts.com/docs/options/plotoptions/bar/
 */
type ApexPlotOptions = {
  area?: {
    fillTo?: 'origin' | 'end'
  }
  bar?: {
    horizontal?: boolean
    endingShape?: 'flat' | 'rounded'
    startingShape?: 'flat' | 'rounded'
    columnWidth?: string
    barHeight?: string
    distributed?: boolean
    rangeBarOverlap?: boolean
    colors?: {
      ranges?: {
        from?: number
        to?: number
        color?: string
      }[]
      backgroundBarColors?: string[]
      backgroundBarOpacity?: number
      backgroundBarRadius?: number
    }
    dataLabels?: {
      maxItems?: number
      hideOverflowingLabels?: boolean
      position?: string
      orientation?: 'horizontal' | 'vertical'
    }
  }
  bubble?: {
    minBubbleRadius?: number
    maxBubbleRadius?: number
  }
  candlestick?: {
    colors?: {
      upward?: string
      downward?: string
    }
    wick?: {
      useFillColor?: boolean
    }
  }
  heatmap?: {
    radius?: number
    enableShades?: boolean
    shadeIntensity?: number
    reverseNegativeShade?: boolean
    distributed?: boolean
    useFillColorAsStroke?: boolean
    colorScale?: {
      ranges?: {
        from?: number
        to?: number
        color?: string
        foreColor?: string
        name?: string
      }[]
      inverse?: boolean
      min?: number
      max?: number
    }
  }
  pie?: {
    startAngle?: number
    customScale?: number
    offsetX?: number
    offsetY?: number
    expandOnClick?: boolean
    dataLabels?: {
      offset?: number
      minAngleToShowLabel?: number
    }
    donut?: {
      size?: string
      background?: string
      labels?: {
        show?: boolean
        name?: {
          show?: boolean
          fontSize?: string
          fontFamily?: string
          fontWeight?: string | number
          color?: string
          offsetY?: number,
          formatter?(val: string): string
        }
        value?: {
          show?: boolean
          fontSize?: string
          fontFamily?: string
          fontWeight?: string | number
          color?: string
          offsetY?: number
          formatter?(val: string): string
        }
        total?: {
          show?: boolean
          showAlways?: boolean
          fontFamily?: string
          fontWeight?: string | number
          fontSize?: string
          label?: string
          color?: string
          formatter?(w: any): string
        }
      }
    }
  }
  polarArea?: {
    rings?: {
      strokeWidth?: number
      strokeColor?: string
    }
  }
  radar?: {
    size?: number
    offsetX?: number
    offsetY?: number
    polygons?: {
      strokeColors?: string | string[]
      strokeWidth?: string | string[]
      connectorColors?: string | string[]
      fill?: {
        colors?: string[]
      }
    }
  }
  radialBar?: {
    inverseOrder?: boolean
    startAngle?: number
    endAngle?: number
    offsetX?: number
    offsetY?: number
    hollow?: {
      margin?: number
      size?: string
      background?: string
      image?: string
      imageWidth?: number
      imageHeight?: number
      imageOffsetX?: number
      imageOffsetY?: number
      imageClipped?: boolean
      position?: 'front' | 'back'
      dropShadow?: ApexDropShadow
    }
    track?: {
      show?: boolean
      startAngle?: number
      endAngle?: number
      background?: string
      strokeWidth?: string
      opacity?: number
      margin?: number
      dropShadow?: ApexDropShadow
    }
    dataLabels?: {
      show?: boolean
      name?: {
        show?: boolean
        fontFamily?: string
        fontWeight?: string | number
        fontSize?: string
        color?: string
        offsetY?: number
      }
      value?: {
        show?: boolean
        fontFamily?: string
        fontSize?: string
        fontWeight?: string | number
        color?: string
        offsetY?: number
        formatter?(val: number): string
      }
      total?: {
        show?: boolean
        label?: string
        color?: string
        fontFamily?: string
        fontWeight?: string | number
        fontSize?: string
        formatter?(opts: any): string
      }
    }
  }
}

type ApexFill = {
  colors?: any[]
  opacity?: number | number[]
  type?: string | string[]
  gradient?: {
    shade?: string
    type?: string
    shadeIntensity?: number
    gradientToColors?: string[]
    inverseColors?: boolean
    opacityFrom?: number
    opacityTo?: number
    stops?: number[]
  }
  image?: {
    src?: string | string[]
    width?: number
    height?: number
  }
  pattern?: {
    style?: string | string[]
    width?: number
    height?: number
    strokeWidth?: number
  }
}

/**
 * Chart Legend configuration options.
 * See https://apexcharts.com/docs/options/legend/
 */
type ApexLegend = {
  show?: boolean
  showForSingleSeries?: boolean
  showForNullSeries?: boolean
  showForZeroSeries?: boolean
  floating?: boolean
  inverseOrder?: boolean
  position?: 'top' | 'right' | 'bottom' | 'left'
  horizontalAlign?: 'left' | 'center' | 'right'
  fontSize?: string
  fontFamily?: string
  fontWeight?: string | number
  width?: number
  height?: number
  offsetX?: number
  offsetY?: number
  formatter?(legendName: string, opts?: any): string
  tooltipHoverFormatter?(legendName: string, opts?: any): string
  textAnchor?: string
  labels?: {
    colors?: string | string[]
    useSeriesColors?: boolean
  }
  markers?: {
    width?: number
    height?: number
    strokeColor?: string
    strokeWidth?: number
    fillColors?: string[]
    offsetX?: number
    offsetY?: number
    radius?: number
    customHTML?(): any
    onClick?(): void
  }
  itemMargin?: {
    horizontal?: number
    vertical?: number
  }
  containerMargin?: {
    left?: number
    top?: number
  }
  onItemClick?: {
    toggleDataSeries?: boolean
  }
  onItemHover?: {
    highlightDataSeries?: boolean
  }
}

type ApexDiscretePoint = {
  seriesIndex?: number
  dataPointIndex?: number
  fillColor?: string
  strokeColor?: string
  size?: number
}

type ApexMarkers = {
  size?: number | number[]
  colors?: string[]
  strokeColors?: string | string[]
  strokeWidth?: number | number[]
  strokeOpacity?: number | number[]
  strokeDashArray?: number | number[]
  fillOpacity?: number | number[]
  discrete?: ApexDiscretePoint[]
  shape?: 'circle' | 'square' | string[]
  radius?: number
  offsetX?: number
  offsetY?: number
  showNullDataPoints?: boolean
  onClick?(e?: any): void
  onDblClick?(e?: any): void
  hover?: {
    size?: number
    sizeOffset?: number
  }
}

type ApexNoData = {
  text?: string
  align?: 'left' | 'right' | 'center'
  verticalAlign?: 'top' | 'middle' | 'bottom'
  offsetX?: number
  offsetY?: number
  style?: {
    color?: string
    fontSize?: string
    fontFamily?: string
  }
}

/**
 * Chart Datalabels options
 * See https://apexcharts.com/docs/options/datalabels/
 */
type ApexDataLabels = {
  enabled?: boolean
  enabledOnSeries?: undefined | number[]
  textAnchor?: 'start' | 'middle' | 'end'
  distributed?: boolean
  offsetX?: number
  offsetY?: number
  style?: {
    fontSize?: string
    fontFamily?: string
    fontWeight?: string | number
    colors?: string[]
  }
  background?: {
    enabled?: boolean
    foreColor?: string
    borderRadius?: number
    padding?: number
    opacity?: number
    borderWidth?: number
    borderColor?: string
    dropShadow: ApexDropShadow
  }
  dropShadow?: ApexDropShadow
  formatter?(val: number, opts?: any): string
}

type ApexResponsive = {
  breakpoint?: number
  options?: any
}

type ApexTooltipY = {
  title?: {
    formatter?(seriesName: string): string
  }
  formatter?(val: number, opts?: any): string
}

/**
 * Chart Tooltip options
 * See https://apexcharts.com/docs/options/tooltip/
 */
type ApexTooltip = {
  enabled?: boolean
  enabledOnSeries?: undefined | number[]
  shared?: boolean
  followCursor?: boolean
  intersect?: boolean
  inverseOrder?: boolean
  custom?: ((options: any) => any) | ((options: any) => any)[]
  fillSeriesColor?: boolean
  theme?: string
  style?: {
    fontSize?: string
    fontFamily?: string
  }
  onDatasetHover?: {
    highlightDataSeries?: boolean
  }
  x?: {
    show?: boolean
    format?: string
    formatter?(val: number, opts?: any): string
  }
  y?: ApexTooltipY | ApexTooltipY[]
  z?: {
    title?: string
    formatter?(val: number): string
  }
  marker?: {
    show?: boolean
    fillColors?: string[]
  }
  items?: {
    display?: string
  }
  fixed?: {
    enabled?: boolean
    position?: string // topRight; topLeft; bottomRight; bottomLeft
    offsetX?: number
    offsetY?: number
  }
}

/**
 * X Axis options
 * See https://apexcharts.com/docs/options/xaxis/
 */
type ApexXAxis = {
  type?: 'category' | 'datetime' | 'numeric'
  categories?: any;
  offsetX?: number;
  offsetY?: number;
  sorted?: boolean;
  labels?: {
    show?: boolean
    rotate?: number
    rotateAlways?: boolean
    hideOverlappingLabels?: boolean
    showDuplicates?: boolean
    trim?: boolean
    minHeight?: number
    maxHeight?: number
    style?: {
      colors?: string | string[]
      fontSize?: string
      fontFamily?: string
      fontWeight?: string | number
      cssClass?: string
    }
    offsetX?: number
    offsetY?: number
    format?: string
    formatter?(value: string, timestamp?: number): string | string[]
    datetimeUTC?: boolean
    datetimeFormatter?: {
      year?: string
      month?: string
      day?: string
      hour?: string
      minute?: string
    }
  }
  axisBorder?: {
    show?: boolean
    color?: string
    offsetX?: number
    offsetY?: number
    strokeWidth?: number
  }
  axisTicks?: {
    show?: boolean
    borderType?: string
    color?: string
    height?: number
    offsetX?: number
    offsetY?: number
  }
  tickPlacement?: string
  tickAmount?: number | 'dataPoints'
  min?: number
  max?: number
  range?: number
  floating?: boolean
  position?: string
  title?: {
    text?: string
    offsetX?: number
    offsetY?: number
    style?: {
      color?: string
      fontFamily?: string
      fontWeight?: string | number
      fontSize?: string
      cssClass?: string
    }
  }
  crosshairs?: {
    show?: boolean
    width?: number | string
    position?: string
    opacity?: number
    stroke?: {
      color?: string
      width?: number
      dashArray?: number
    }
    fill?: {
      type?: string
      color?: string
      gradient?: {
        colorFrom?: string
        colorTo?: string
        stops?: number[]
        opacityFrom?: number
        opacityTo?: number
      }
    }
    dropShadow?: ApexDropShadow
  }
  tooltip?: {
    enabled?: boolean
    offsetY?: number
    formatter?(value: string, opts?: object): string
    style?: {
      fontSize?: string
      fontFamily?: string
    }
  }
}

/**
 * Y Axis options
 * See https://apexcharts.com/docs/options/yaxis/
 */

type ApexYAxis = {
  show?: boolean
  showAlways?: boolean
  showForNullSeries?: boolean
  seriesName?: string
  opposite?: boolean
  reversed?: boolean
  logarithmic?: boolean
  tickAmount?: number
  forceNiceScale?: boolean
  min?: number | ((min: number) => number)
  max?: number | ((max: number) => number)
  floating?: boolean
  decimalsInFloat?: number
  labels?: {
    show?: boolean
    minWidth?: number
    maxWidth?: number
    offsetX?: number
    offsetY?: number
    rotate?: number
    align?: 'left' | 'center' | 'right'
    padding?: number
    style?: {
      colors?: string
      fontSize?: string
      fontWeight?: string | number
      fontFamily?: string
      cssClass?: string
    }
    formatter?(val: number, opts?: any): string
  }
  axisBorder?: {
    show?: boolean
    color?: string
    width?: number
    offsetX?: number
    offsetY?: number
  }
  axisTicks?: {
    show?: boolean
    color?: string
    width?: number
    offsetX?: number
    offsetY?: number
  }
  title?: {
    text?: string
    rotate?: number
    offsetX?: number
    offsetY?: number
    style?: {
      color?: string
      fontSize?: string
      fontWeight?: string | number
      fontFamily?: string
      cssClass?: string
    }
  }
  crosshairs?: {
    show?: boolean
    position?: string
    stroke?: {
      color?: string
      width?: number
      dashArray?: number
    }
  }
  tooltip?: {
    enabled?: boolean
    offsetX?: number
  }
}

/**
 * Plot X and Y grid options
 * See https://apexcharts.com/docs/options/grid/
 */
type ApexGrid = {
  show?: boolean
  borderColor?: string
  strokeDashArray?: number
  position?: 'front' | 'back'
  xaxis?: {
    lines?: {
      show?: boolean
      offsetX?: number
      offsetY?: number
    }
  }
  yaxis?: {
    lines?: {
      show?: boolean
      offsetX?: number
      offsetY?: number
    }
  }
  row?: {
    colors?: string[]
    opacity?: number
  }
  column?: {
    colors?: string[]
    opacity?: number
  }
  padding?: {
    top?: number
    right?: number
    bottom?: number
    left?: number
  }
}

type ApexTheme = {
  mode?: 'light' | 'dark'
  palette?: string
  monochrome?: {
    enabled?: boolean
    color?: string
    shadeTo?: 'light' | 'dark'
    shadeIntensity?: number
  }
}

declare module 'apexcharts' {
  export = ApexCharts
}
