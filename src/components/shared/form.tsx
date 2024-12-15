"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "~/lib/utils";
import { CalendarIcon, X } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import emailFormSchema from "~/server/validation/email-form-schema";
import { api } from "~/trpc/react";
import { toast } from "sonner";
import { useState } from "react";
import { Label } from "../ui/label";
import { LoadingButton } from "../ui/loading-button";

const DEPARTMENT = ["FF&A", "MEDICAL BILLING", "HR", "IT"];
const MANAGER_EMAILS = [
  "am@qualicentric.com",
  "ga@qualicentric.com",
  "lovkesh@qualicentric.com",
];

export function EmailForm() {
  const [emails, setEmails] = useState<string[]>(["hr@qualicentric.com","Atul@qualicentric.com"]);
  const { mutate: sendMail, isPending } = api.email.sendMail.useMutation();

  const form = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      ename: "",
      managerName: "",
    },
  });

  const onSubmit = (values: z.infer<typeof emailFormSchema>) => {
    if (emails.length === 0) {
      toast.warning("Please add at least one email address.");
      return;
    }

    sendMail(
      { ...values, receiversEmails: emails },
      {
        onSuccess: (opts) => {
          toast.success(opts?.message);
          form.reset();
          setEmails([]);
        },
        onError: (opts) => {
          toast.error(opts.message);
        },
      },
    );
  };

  const handleAddEmail = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const email = e.currentTarget.value.trim();

      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!regex.test(email)) {
        toast.error("invalid email address");
        return;
      }

      if (email && !emails.includes(email)) {
        setEmails((prev) => [...prev, email]);
      } else {
        toast.error("email already exists");
        return;
      }

      e.currentTarget.value = "";
    }
  };

  const handleRemoveEmail = (emailToRemove: string) => {
    setEmails((prev) => prev.filter((email) => email !== emailToRemove));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="ename"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employee Name</FormLabel>
              <FormControl>
                <Input placeholder="eg: sahil" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateOfJoining"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="space-y-3">
                  <FormLabel>Date Of Joining</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Department</FormLabel>
              <FormControl>
                {/* <Input placeholder="eg: medical billing" {...field} /> */}
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="select department" />
                  </SelectTrigger>
                  <SelectContent>
                    {DEPARTMENT.map((item, idx) => (
                      <SelectItem key={idx} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="managerEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Manager Email</FormLabel>
              <FormControl>
                {/* <Input placeholder="eg: medical billing" {...field} /> */}
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="select manager email" />
                  </SelectTrigger>
                  <SelectContent>
                    {MANAGER_EMAILS.map((item, idx) => (
                      <SelectItem key={idx} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="managerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Manager Name</FormLabel>
              <FormControl>
                <Input placeholder="eg: sahil" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-2">
          <Label htmlFor="emails">Receivers Emails</Label>
          <Input
            id="emails"
            type="email"
            placeholder="some@outlook.com, another@outlook.com"
            onKeyDown={handleAddEmail}
          />
          {emails.length > 0 && (
            <ul className="h-full max-h-40 space-y-2 overflow-y-auto">
              {emails.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between rounded-md border p-2 text-sm"
                >
                  {item}
                  <X
                    className="size-4 cursor-pointer"
                    onClick={() => handleRemoveEmail(item)}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>

        {isPending ? (
          <LoadingButton loading>Sending Emails</LoadingButton>
        ) : (
          <Button type="submit" size="lg">
            Send Emails
          </Button>
        )}
      </form>
    </Form>
  );
}
