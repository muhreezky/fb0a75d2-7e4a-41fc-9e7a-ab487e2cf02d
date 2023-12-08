import { Cog6ToothIcon } from "@heroicons/react/24/solid";

export default function Loading() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-3 justify-center items-center">
      <Cog6ToothIcon className="w-52 h-52 animate-spin" />
      <div className="text-2xl font-bold">
        Please wait...
      </div>
    </div>
  )
}