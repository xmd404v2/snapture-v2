import { GalleryVerticalEnd } from "lucide-react"
import Image from "next/image";

import { LoginForm } from "@/components/forms/auth/Login"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2">
          <a href="#" className="flex items-center gap-2 font-medium">
            <Image
                className="light:invert"
                src="/snapture_black.svg"
                alt="Next.js logo"
                width={124}
                height={38}
                priority
            />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/login_hero.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.] dark:grayscale"
        />
      </div>
    </div>
  )
}
