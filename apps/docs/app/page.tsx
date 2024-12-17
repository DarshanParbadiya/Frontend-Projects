import { LoginForm } from "@repo/ui/components/login-form";
import { Button } from "@repo/ui/components/ui/button";

export default function Page() {
  return (
    <main>
      <h1>Form!</h1>
      {/* <Button>Click me</Button> */}
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
    </main>
  );
}
