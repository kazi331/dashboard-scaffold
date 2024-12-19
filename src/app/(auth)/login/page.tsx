import { LoginForm } from "@/app/(auth)/login-form";
import { placeholderImage } from "@/lib/helpers";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <Image
              src="/icons/admin_logo.png"
              alt="Logo"
              width={24}
              height={24}
            />
            TutorsPlan Inc.
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src={placeholderImage(1000, 1000)}
          alt="Image"
          layout="fill"
          className="absolute inset-0 h-full w-full object-cover object-center dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
