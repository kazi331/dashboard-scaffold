import { Button } from "../../components/ui/button";

export default function SocialLogin() {
  return (
    <>
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
      <Button variant="outline" className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            fill="currentColor"
          />
        </svg>
        Sign Up with GitHub
      </Button>
      <Button variant="outline" className="w-full mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="24px"
          height="24px"
        >
          <path
            fill="#4285F4"
            d="M24 9.5c3.9 0 6.6 1.6 8.1 2.9l6-6C34.9 3.5 29.9 1 24 1 14.8 1 7.1 6.7 3.7 14.7l7.1 5.5C12.5 14.1 17.7 9.5 24 9.5z"
          />
          <path
            fill="#34A853"
            d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3.1-2.4 5.7-4.9 7.4l7.1 5.5c4.2-3.9 6.6-9.6 6.6-16.4z"
          />
          <path
            fill="#FBBC05"
            d="M10.8 28.2c-1.1-3.1-1.1-6.5 0-9.6L3.7 13c-2.4 4.8-2.4 10.4 0 15.2l7.1-5.5z"
          />
          <path
            fill="#EA4335"
            d="M24 46c5.9 0 10.9-1.9 14.5-5.2l-7.1-5.5c-2 1.4-4.5 2.2-7.4 2.2-6.3 0-11.5-4.3-13.4-10.1l-7.1 5.5C7.1 41.3 14.8 46 24 46z"
          />
          <path fill="none" d="M0 0h48v48H0z" />
        </svg>
        Sign Up with Google
      </Button>
    </>
  );
}
