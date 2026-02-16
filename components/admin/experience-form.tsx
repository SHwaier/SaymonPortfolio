'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Loader2, Save, Trash2 } from "lucide-react"
import { Experience } from "@/types"
import Link from "next/link"

interface ExperienceFormProps {
    initialData?: Experience
}

export function ExperienceForm({ initialData }: ExperienceFormProps) {
    const router = useRouter()
    const supabase = createClient()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const [formData, setFormData] = useState<Partial<Experience>>({
        title: initialData?.title || "",
        company: initialData?.company || "",
        location: initialData?.location || "",
        start_date: initialData?.start_date || "",
        end_date: initialData?.end_date || "",
        description: initialData?.description || "",
        technologies: initialData?.technologies || [],
    })

    const [techString, setTechString] = useState(initialData?.technologies?.join(", ") || "")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTechString(e.target.value)
        const techs = e.target.value.split(",").map((t) => t.trim()).filter(Boolean)
        setFormData((prev) => ({ ...prev, technologies: techs }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const { error } = initialData?.id
                ? await supabase
                    .from("experience")
                    .update(formData)
                    .eq("id", initialData.id)
                : await supabase.from("experience").insert([formData])

            if (error) throw error

            router.push("/admin/experience")
            router.refresh()
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to save experience")
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async () => {
        if (!initialData?.id || !confirm("Are you sure you want to delete this position?")) return

        setLoading(true)
        try {
            const { error } = await supabase.from("experience").delete().eq("id", initialData.id)
            if (error) throw error
            router.push("/admin/experience")
            router.refresh()
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to delete position")
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/admin/experience">
                            <ArrowLeft className="w-4 h-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-2xl font-bold font-serif">
                            {initialData ? "Edit Position" : "New Position"}
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            {initialData ? `Editing ${initialData.title} at ${initialData.company}` : "Add a new role to your background"}
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
                                Save Position
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
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="title">Job Title</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Senior Software Engineer"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Acme Corp"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="location">Location</Label>
                                    <Input
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="Remote / City, Country"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Key responsibilities and achievements..."
                                    className="min-h-[150px]"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="technologies">Technologies Used</Label>
                                <Input
                                    id="technologies"
                                    value={techString}
                                    onChange={handleTechChange}
                                    placeholder="Python, AWS, Docker..."
                                />
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {formData.technologies?.map((tech, i) => (
                                        <span key={i} className="text-xs bg-secondary px-2 py-1 rounded-md">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="start_date">Start Date</Label>
                                <Input
                                    id="start_date"
                                    name="start_date"
                                    value={formData.start_date}
                                    onChange={handleChange}
                                    placeholder="Oct 2023"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="end_date">End Date</Label>
                                <Input
                                    id="end_date"
                                    name="end_date"
                                    value={formData.end_date}
                                    onChange={handleChange}
                                    placeholder="Present"
                                    required
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </form>
    )
}
