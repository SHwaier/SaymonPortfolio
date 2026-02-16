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
import { Project } from "@/types"
import Link from "next/link"
import Image from "next/image"

interface ProjectFormProps {
    initialData?: Project
}

export function ProjectForm({ initialData }: ProjectFormProps) {
    const router = useRouter()
    const supabase = createClient()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const [formData, setFormData] = useState<Partial<Project>>({
        title: initialData?.title || "",
        description: initialData?.description || "",
        image: initialData?.image || "",
        technologies: initialData?.technologies || [],
        live_url: initialData?.live_url || "",
        github_url: initialData?.github_url || "",
        size: initialData?.size || "medium",
    })

    // Handle technologies as comma-separated string for input
    const [techString, setTechString] = useState(initialData?.technologies?.join(", ") || "")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTechString(e.target.value)
        // Update array in formData
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
                    .from("projects")
                    .update(formData)
                    .eq("id", initialData.id)
                : await supabase.from("projects").insert([formData])

            if (error) throw error

            router.push("/admin/projects")
            router.refresh()
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to save project")
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async () => {
        if (!initialData?.id || !confirm("Are you sure you want to delete this project?")) return

        setLoading(true)
        try {
            const { error } = await supabase.from("projects").delete().eq("id", initialData.id)
            if (error) throw error
            router.push("/admin/projects")
            router.refresh()
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to delete project")
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/admin/projects">
                            <ArrowLeft className="w-4 h-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-2xl font-bold font-serif">
                            {initialData ? "Edit Project" : "New Project"}
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            {initialData ? `Editing ${initialData.title}` : "Add a new project to your portfolio"}
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
                                Save Project
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
                            <div className="space-y-2">
                                <Label htmlFor="title">Project Title</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="e.g. E-Commerce Dashboard"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Describe the project, challenges, and outcomes..."
                                    className="min-h-[150px]"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="technologies">Technologies</Label>
                                <Input
                                    id="technologies"
                                    value={techString}
                                    onChange={handleTechChange}
                                    placeholder="React, TypeScript, TailwindCSS (comma separated)"
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

                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="live_url">Live URL</Label>
                                    <Input
                                        id="live_url"
                                        name="live_url"
                                        value={formData.live_url || ""}
                                        onChange={handleChange}
                                        placeholder="https://..."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="github_url">GitHub URL</Label>
                                    <Input
                                        id="github_url"
                                        name="github_url"
                                        value={formData.github_url || ""}
                                        onChange={handleChange}
                                        placeholder="https://github.com/..."
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar / Options */}
                <div className="space-y-6">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="image">Image URL</Label>
                                <Input
                                    id="image"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    placeholder="/projects/screenshot.jpg"
                                />
                                {formData.image && (
                                    <div className="aspect-video w-full rounded-md bg-muted overflow-hidden border border-border mt-2">
                                        <Image src={formData.image}
                                            width={500}
                                            height={500}
                                            alt="Preview" className="w-full h-full object-cover" />
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="size">Card Size</Label>
                                <select
                                    id="size"
                                    name="size"
                                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    value={formData.size || "medium"}
                                    onChange={handleChange}
                                >
                                    <option value="small">Small (1 col)</option>
                                    <option value="medium">Medium (1 col)</option>
                                    <option value="large">Large (2 cols)</option>
                                </select>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </form>
    )
}
