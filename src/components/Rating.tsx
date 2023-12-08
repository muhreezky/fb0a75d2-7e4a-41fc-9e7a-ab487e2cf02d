"use client";
import { StarIcon } from "@heroicons/react/24/solid";

type RatingProps = {
  value: number | string;
}

export default function Rating(props: RatingProps) {
  const value = Number(props.value);
  const arr: any[] = [];
  for(let i = 1; i < value; i++) {
    arr.push(i);
  }
  return (
    <>
      <div className="flex flex-row gap-1">
        {arr.map((_val, key) => <StarIcon key={key} className="w-5 h-5" />)}
      </div>
      <div className="ml-2">{value} / 5</div>
    </>
  )
}