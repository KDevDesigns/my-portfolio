"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function CustomContactMe() {
  return (
    <form className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstname">First Name</Label>
          <Input id="firstname" name="firstname" type="text" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastname">Last Name</Label>
          <Input id="lastname" name="lastname" type="text" placeholder="Doe" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="m@example.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Type your message here." required />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#7A382B] hover:bg-[#5f2e23] active:bg-black text-white"
      >
        Submit
      </Button>
    </form>
  );
}
