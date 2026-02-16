'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Loader2, Save, Trash2 } from "lucide-react"
import { Skill } from "@/types"
import Link from "next/link"

interface SkillFormProps {
    initialData?: Skill
}

const CATEGORIES = [
    "Frontend Development",
    "Backend Development",
    "Tools & DevOps",
    "Additional Tools",
    "Current Learning"
]

const LEVELS = ["Expert", "Advanced", "Intermediate", "Beginner"]
const YEARS = ["3y+", "2y+", "1y+", "<1y", "N/A"]

export function SkillForm({ initialData }: SkillFormProps) {
    const router = useRouter()
    const supabase = createClient()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const [formData, setFormData] = useState<Partial<Skill>>({
        name: initialData?.name || "",
        category: initialData?.category || CATEGORIES[0],
        level: initialData?.level || LEVELS[2],
        years: initialData?.years || YEARS[2],
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const { error } = initialData?.id
                ? await supabase
                    .from("skills")
                    .update(formData)
                    .eq("id", initialData.id)
                : await supabase.from("skills").insert([formData])

            if (error) throw error

            router.push("/admin/skills")
            router.refresh()
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to save skill")
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async () => {
        if (!initialData?.id || !confirm("Are you sure you want to delete this skill?")) return

        setLoading(true)
        try {
            const { error } = await supabase.from("skills").delete().eq("id", initialData.id)
            if (error) throw error
            router.push("/admin/skills")
            router.refresh()
        } catch (err) {
            alert(err instanceof Error ? err.message : "Failed to delete skill")
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/admin/skills">
                            <ArrowLeft className="w-4 h-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-2xl font-bold font-serif">
                            {initialData ? "Edit Skill" : "New Skill"}
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            {initialData ? `Editing ${initialData.name}` : "Add a new skill"}
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
                                Save Skill
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

            <Card>
                <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {CATEGORIES.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="name">Skill Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. React"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="level">Proficiency</Label>
                            <select
                                id="level"
                                name="level"
                                value={formData.level}
                                onChange={handleChange}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {LEVELS.map(l => (
                                    <option key={l} value={l}>{l}</option>
                                ))}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="years">Years Experience</Label>
                            <select
                                id="years"
                                name="years"
                                value={formData.years}
                                onChange={handleChange}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {YEARS.map(y => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </form>
    )
}
