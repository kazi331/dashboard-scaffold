import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Checkbox } from "../../components/ui/checkbox";

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create a new account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your details below to create a new account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input id="confirm-password" type="password" required />
        </div>
        <div className="flex gap-2">
          <Checkbox id="terms" required />
          <Label htmlFor="terms">
            I agree to the{" "}
            <Link href="/privacy" className="hover:underline">
              privacy policy{" "}
            </Link>
            and{" "}
            <Link href="/terms" className="hover:underline">
              terms of service
            </Link>
          </Label>
        </div>
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
        {/* <SocialLogin /> */}
      </div>
      <div className="text-center text-sm">
        Already have an account? <Link href="/login">Login</Link>
      </div>
    </form>
  );
}
