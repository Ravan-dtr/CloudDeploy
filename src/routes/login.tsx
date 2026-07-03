import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <Card className="w-full max-w-md">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome Back
          </h1>

          <p className="text-muted-foreground mb-8">
            Login to CloudDeploy
          </p>

          <form className="space-y-5">
            <Input placeholder="Email" type="email" />

            <Input placeholder="Password" type="password" />

            <Button className="w-full" variant="hero">
              Login
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-primary hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}