import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <Loader2 className="h-12 w-12 animate-spin text-[#FFBE00]" />
        <p className="mt-4 text-lg font-medium">Loading canvas page...</p>
      </div>
    </div>
  )
}
