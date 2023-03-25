import DarkModeSwitcher from "@/components/DarkModeSwitcher"
import { memo } from "react"

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-[100vh] dark:bg-gray-600 dark:text-white text-center p-2">
      <div className="flex justify-end">
        <DarkModeSwitcher/>
      </div>
      [home page goes here]
    </div>
  )
}

export default memo(HomePage)
