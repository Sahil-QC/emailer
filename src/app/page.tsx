import React from "react";
import { EmailForm } from "~/components/shared/form";
import { HydrateClient } from "~/trpc/server";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ModeToggle } from "~/components/shared/dark-mode-toggle";

const page = () => {
  return (
    <HydrateClient>
      <div className="mx-auto flex h-screen max-w-screen-sm items-center justify-center px-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Send Email</CardTitle>
            <CardDescription className="flex items-center justify-between">
              Send email whosoever you want {":)"}
              <ModeToggle />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmailForm />
          </CardContent>
        </Card>
      </div>
    </HydrateClient>
  );
};

export default page;
