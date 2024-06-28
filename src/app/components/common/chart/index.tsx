"use client";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "채권 이름",
    color: "hsl(48, 70%, 50%)",
    data: [
      {
        x: "1월",
        y: 58,
      },
      {
        x: "2월",
        y: 164,
      },
      {
        x: "3월",
        y: 105,
      },
      {
        x: "4월",
        y: 29,
      },
      {
        x: "5월",
        y: 58,
      },
      {
        x: "6월",
        y: 254,
      },
      {
        x: "7월",
        y: 176,
      },
      {
        x: "8월",
        y: 55,
      },
      {
        x: "9월",
        y: 266,
      },
      {
        x: "10월",
        y: 205,
      },
      {
        x: "11월",
        y: 139,
      },
      {
        x: "12월",
        y: 40,
      },
    ],
  },
];

export default function Chart() {
  return (
    <div style={{ height: 400 }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "월",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "1000k",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointBorderWidth={2}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}
