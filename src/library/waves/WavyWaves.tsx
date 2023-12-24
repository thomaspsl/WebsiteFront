import { FC, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./styles.css";
import { getFirstGradientOptions, getSecondGradientOptions } from "./options";

type Props = {
  beginColor: string,
  finishColor: string,
  direction: string;
  duration: number;
};

export const WavyWaves: FC<Props> = ({ beginColor, finishColor, direction, duration }) => {
  const array = [1,3]; shuffle(array); const stable = 2;
  const first : any = array.shift();
  const second = array[0];

  function shuffle(array : any) {
    array.sort(() => Math.random() - 0.5);
  }

  const [seriesA, setSeriesA] = useState([first, second, stable, second, stable])
  const [seriesB, setSeriesB] = useState([second, first, stable, first, stable])

  const firstOptions = getSecondGradientOptions(beginColor, blendColors(beginColor, finishColor, 0.75), duration);
  const secondOptions = getFirstGradientOptions(finishColor, blendColors(beginColor, finishColor, 0.75), duration);

  useEffect(() => {
    setSeriesB([3, 3, 3, 3, 3]);
    setTimeout(() => setSeriesA([0, 0, 0, 0, 0]), duration / 2); // half total animation
  }, [duration]);

  return (
    <div id="react-wavy-transitions__waves">
      <div
        style={{ animationDuration: `${duration}ms` }}
        className={`${direction} react-wavy-transitions__second`}>
        <Chart
          options={firstOptions}
          series={[{
            name: "series-1",
            data: seriesB,
          }]}
          type="area"
          width="100%"
          height="100%"/>
      </div>

      <div
        style={{ animationDuration: `${duration}ms` }}
        className={`${direction} react-wavy-transitions__first`}>
        <Chart
          options={secondOptions}
          series={[{
            name: "series-1",
            data: seriesA,
          }]}
          type="area"
          width="100%"
          height="100%"/>
      </div>
      
    </div>
  );
};

function blendColors(colorA : string, colorB : string, amount : number) {
  const [rA, gA, bA] : any = colorA?.match(/\w\w/g)?.map((c) => parseInt(c, 16));
  const [rB, gB, bB] : any = colorB?.match(/\w\w/g)?.map((c) => parseInt(c, 16));
  const r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0');
  const g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0');
  const b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0');
  return '#' + r + g + b;
}