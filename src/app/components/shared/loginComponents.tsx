/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { X, Mail, Lock } from "lucide-react"

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import loginUser from "@/src/utility/login"
import { toast } from "sonner"
import { useState } from "react"
import checkAuthStatus from "@/src/utility/auth"

// ✅ Validation Schema
const loginSchema = z.object({
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})

type LoginValues = z.infer<typeof loginSchema>

export function LoginCard() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const form = useForm<LoginValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (values: LoginValues) => {
        setLoading(true)
        // TODO: Replace with your login API call
        try {
            const res = await loginUser(values.email, values.password);

            if (res?.success) {
                toast.success(res?.message)

                const authStatus = await checkAuthStatus();
                if (authStatus?.isAuthenticated && authStatus?.user) {
                    const { role } = authStatus?.user;
                    switch (role) {
                        case "ADMIN": router.push("/services");
                            break;
                        case "DOCTOR": router.push("/dashboard/doctor")
                            break;
                        case "PATIENT": router.push("/dashboard/patient")
                            break;
                        default: router.push("/")
                            break;
                    }
                } else {
                    throw new Error("Faild to retrieve user information after login!")
                }
            }

            if (!res?.success) {
                toast.error(res?.message)
            }

        } catch (error: any) {
            throw new Error(error || "Faild to retrieve user information after login!")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-dvh bg-linear-to-br from-blue-50 to-white px-4">
            <Card className="relative w-full max-w-md shadow-xl border border-blue-100">
                {/* ❌ Close Icon */}
                <button
                    onClick={() => router.push("/")}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
                >
                    <X size={20} />
                </button>

                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-blue-600">
                        Welcome Back
                    </CardTitle>
                    <CardDescription>Sign in to continue to Health Care</CardDescription>
                </CardHeader>

                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                            {/* Email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <div className="flex items-center border rounded-lg px-3">
                                                <Mail size={18} className="text-gray-400 mr-2" />
                                                <Input
                                                    placeholder="you@example.com"
                                                    {...field}
                                                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Password */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <div className="flex items-center border rounded-lg px-3">
                                                <Lock size={18} className="text-gray-400 mr-2" />
                                                <Input
                                                    type="text"
                                                    placeholder="Enter your password"
                                                    {...field}
                                                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2"
                            >
                                {loading ? "Plase wait..." : "Login"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>

                <CardFooter className="text-center text-sm text-gray-500">
                    Don’t have an account?{" "}
                    <button
                        onClick={() => router.push("/register")}
                        className="text-blue-600 hover:underline ml-1"
                    >
                        Sign up
                    </button>
                </CardFooter>
            </Card>
        </div>
    )
}
