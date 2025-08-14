// app/signin/page.tsx  (App Router)
// or pages/signin.tsx  (Pages Router)

"use client"; // only for App Router if you're using hooks

import { SigninComponent } from "@/components/Signin";
import React, { useState } from "react";

interface SignInForm {
  email: string;
  password: string;
}

export default function SignInPage() {
  const [form, setForm] = useState<SignInForm>({ email: "", password: "" });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");

    // Example API request in Next.js
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      console.log("Signed in successfully!");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <SigninComponent/>
  );
}
