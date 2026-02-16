'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Loader2, Save, Trash2, Star, User } from "lucide-react"
import { Testimonial } from "@/types"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialFormProps {
    initialData?: Testimonial
}

export function TestimonialForm({ initialData }: TestimonialFormProps) {
    const router = useRouter()
    const supabase = createClient()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const [formData, setFormData] = useState<Partial<Testimonial>>({
        name: initialData?.name || "",
        role: initialData?.role || "",
        company: initialData?.company || "",
        content: initialData?.content || "",
        avatar_url: initialData?.avatar_url || "",
        rating: initialData?.rating || 5,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleRatingChange = (rating: number) => {
        setFormData((prev) => ({ ...prev, rating }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const { error } = initialData?.id
                ? await supabase
                    .from("testimonials")
                    .update(formData)
                    .eq("id", initialData.id)
                : await supabase.from("testimonials").insert([formData])

            if (error) throw error

            router.push("/admin/testimonials")
            router.refresh()
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to save testimonial")
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async () => {
        if (!initialData?.id || !confirm("Are you sure you want to delete this testimonial?")) return

        setLoading(true)
        try {
            const { error } = await supabase.from("testimonials").delete().eq("id", initialData.id)
            if (error) throw error
            router.push("/admin/testimonials")
            router.refresh()
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to delete testimonial")
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/admin/testimonials">
                            <ArrowLeft className="w-4 h-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-2xl font-bold font-serif">
                            {initialData ? "Edit Testimonial" : "New Testimonial"}
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            {initialData ? `Editing testimonial from ${initialData.name}` : "Add a new testimonial"}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {initialData && (
                        <Button type="button" variant="destructive" size="icon" onClick={handleDelete} disabled={loading}>
                            <Trash2 className="w-4 h-4" />
                        </Button>
                    )}
                    <Button type="submit" disabled={loading}>
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Saving...
                            </>
                        ) : (
                            <>
                                <Save className="mr-2 h-4 w-4" />
                                Save Testimonial
                            </>
                        )}
                    </Button>
                </div>
            </div>

            {error && (
                <div className="bg-destructive/15 text-destructive p-3 rounded-md text-sm font-medium">
                    {error}
                </div>
            )}

            <div className="grid gap-6 md:grid-cols-3">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="e.g. Jane Doe"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="role">Role</Label>
                                    <Input
                                        id="role"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        placeholder="e.g. Senior Developer"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company">Company</Label>
                                <Input
                                    id="company"
                                    name="company"
                                    value={formData.company || ""}
                                    onChange={handleChange}
                                    placeholder="e.g. Acme Corp"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content">Content</Label>
                                <Textarea
                                    id="content"
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    placeholder="The testimonial text..."
                                    className="min-h-[150px]"
                                    required
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar / Options */}
                <div className="space-y-6">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="avatar_url">Avatar URL</Label>
                                <Input
                                    id="avatar_url"
                                    name="avatar_url"
                                    type="url"
                                    value={formData.avatar_url || ""}
                                    onChange={handleChange}
                                    placeholder="https://..."
                                />
                                <div className="flex justify-center mt-4">
                                    <Avatar className="h-24 w-24 border-2 border-border">
                                        <AvatarImage src={formData.avatar_url || ""} />
                                        <AvatarFallback className="text-2xl">
                                            {formData.name?.slice(0, 2).toUpperCase() || <User className="h-8 w-8" />}
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Rating</Label>
                                <div className="flex gap-1 justify-center py-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => handleRatingChange(star)}
                                            className="focus:outline-none transition-transform hover:scale-110"
                                        >
                                            <Star
                                                className={`h-8 w-8 ${star <= (formData.rating || 0)
                                                    ? "text-yellow-500 fill-yellow-500"
                                                    : "text-muted-foreground/20"
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </form>
    )
}
