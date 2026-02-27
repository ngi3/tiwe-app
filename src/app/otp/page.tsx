import { Suspense } from "react"
import Otp from "../components/Otp"

export default function page() {
  return (
    <div>
      <Suspense fallback={<div>Chargement...</div>}>
        <Otp />
      </Suspense>
    </div>
  )
}
