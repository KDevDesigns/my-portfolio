"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export function CustomContactMe() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "invalid-email">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Auto-hide alerts after 3 seconds
  useEffect(() => {
    if (status !== "idle") {
      const timer = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const validateEmail = async (email: string) => {
    try {
      const res = await fetch(
        `https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.NEXT_PUBLIC_ABSTRACT_API_KEY}&email=${email}`
      );
      const data = await res.json();

      return (
        data.is_valid_format.value &&
        data.is_mx_found.value &&
        data.is_smtp_valid.value &&
        !data.is_disposable_email.value
      );
    } catch (err) {
      console.error("Email validation error", err);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const isValid = await validateEmail(formData.email);

    if (!isValid) {
      setStatus("invalid-email");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ firstname: "", lastname: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstname">First Name</Label>
          <Input
            id="firstname"
            name="firstname"
            type="text"
            placeholder="John"
            required
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastname">Last Name</Label>
          <Input
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Doe"
            required
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="m@example.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Type your message here."
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#7A382B] hover:bg-[#5f2e23] active:bg-black text-white"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </Button>

      {status === "success" && (
        <Alert variant="default" className="border-green-500 bg-green-50">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          <AlertTitle className="text-green-700">Message sent!</AlertTitle>
          <AlertDescription>I’ll get back to you shortly.</AlertDescription>
        </Alert>
      )}
      {status === "error" && (
        <Alert variant="destructive">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle>Submission failed</AlertTitle>
          <AlertDescription>There was a problem sending your message.</AlertDescription>
        </Alert>
      )}
      {status === "invalid-email" && (
        <Alert variant="destructive">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle>Invalid email address</AlertTitle>
          <AlertDescription>
            Please enter a valid, non-temporary email address.
          </AlertDescription>
        </Alert>
      )}
    </form>
  );
}
