"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import SocialLogin from "./socialLogin";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());
    try {
      const res = await axios.post("http://localhost:2312/login", values);
      const key = res.headers;
      if (key) {
        console.log(key);
      } else {
        console.log("Key not found in headers");
      }
    } catch (err: unknown) {
      console.log(err);
    }
  };
  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            required
            defaultValue="sayem@khan.com"
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/reset-password"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input
            name="password"
            id="password"
            type="password"
            required
            defaultValue="Sayem@123"
          />
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          Login
        </Button>
        <SocialLogin />
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account? <Link href="/signup">Sign up</Link>
      </div>
    </form>
  );
}
