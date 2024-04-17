import Popular from "../components/Popular";
import Picked from "../components/Picked";
import Calorie from "../components/Calorie";

export default function Home() {
  return (
    <div>
      <Picked />
      <Popular />
      <Calorie />
    </div>
  )
}