const options1 = {
  chart: {
    id: "wavy-mcwave-wave",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    animations: {
      enabled: true,
      speed: 1,
      dynamicAnimation: {
        speed: 750,
      },
      animateGradually: {
        enabled: true,
        delay: 0,
      },
    },
  },
  grid: {
    show: false,
    padding: {
      top: -30,
      left: -10,
      bottom: -16,
      right: 0,
    },
  },
  fill: {
    opacity: 1,
    type: "gradient",
    colors: [""],
    gradient: {
      shade: 'dark',
      gradientToColors: [""],
      shadeIntensity: 1,
      type: 'vertical',
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100]
    },
    image: {
        src: [],
        width: undefined,
        height: undefined
    },
    pattern: {
        style: 'verticalLines',
        width: 6,
        height: 6,
        strokeWidth: 2,
    },
  },
  tooltip: {
    enabled: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    dataLabels: {
      show: false,
    },
    markers: {
      enabled: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    max: 3,
    min: 0,
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
};

const options2 = {
  chart: {
    id: "wavy-mcwave-wave",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    animations: {
      enabled: true,
      speed: 1,
      dynamicAnimation: {
        speed: 750,
      },
      animateGradually: {
        enabled: true,
        delay: 0,
      },
    },
  },
  grid: {
    show: false,
    padding: {
      top: -30,
      left: -10,
      bottom: -16,
      right: 0,
    },
  },
  fill: {
    opacity: 1,
    type: "gradient",
    colors: [""],
    gradient: {
      shade: 'dark',
      gradientToColors: [""],
      shadeIntensity: 1,
      type: 'vertical',
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100]
    },
    image: {
        src: [],
        width: undefined,
        height: undefined
    },
    pattern: {
        style: 'verticalLines',
        width: 6,
        height: 6,
        strokeWidth: 2,
    },
  },
  tooltip: {
    enabled: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    dataLabels: {
      show: false,
    },
    markers: {
      enabled: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    max: 3,
    min: 0,
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
};

export const getFirstGradientOptions = (come: string, from: string, duration: number) => {
    options1.fill = {
      colors: [come],
      opacity: 1,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: [from],
        shadeIntensity: 1,
        type: 'vertical',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      },
      image: {
          src: [],
          width: undefined,
          height: undefined
      },
      pattern: {
          style: 'horizontalLines',
          width: 6,
          height: 6,
          strokeWidth: 2,
      },
  }

  options1.chart.animations.dynamicAnimation.speed = duration / 2;

  return options1;
};

export const getSecondGradientOptions = (come: string, from: string, duration: number) => {
  options2.fill = {
    colors: [come],
    opacity: 1,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      gradientToColors: [from],
      shadeIntensity: 1,
      type: 'vertical',
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100]
    },
    image: {
        src: [],
        width: undefined,
        height: undefined
    },
    pattern: {
        style: 'horizontalLines',
        width: 6,
        height: 6,
        strokeWidth: 2,
    },
}

options2.chart.animations.dynamicAnimation.speed = duration / 2;

return options2;
};
