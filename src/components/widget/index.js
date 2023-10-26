"use client";

import Card from "../card";

export default function Widget({ icon, title, subtitle }) {
  return (
    <Card
      additionalStyles={
        "!flex-row flex-grow items-center rounded-[20px] dark:!bg-zinc-800"
      }
    >
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full bg-lightPrimary p-3 dark:bg-zinc-700">
          <span className="flex items-center text-[#6cb4f1]">{icon}</span>
        </div>
      </div>
      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <h4 className="text-xl font-bold text-zinc-700 dark:text-white">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
}
