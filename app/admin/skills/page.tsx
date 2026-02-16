import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import { Skill } from '@/types'
import { Badge } from '@/components/ui/badge'

export const dynamic = 'force-dynamic'

export default async function AdminSkillsPage() {
    const supabase = await createClient()

    const { data: skills, error } = await supabase
        .from('skills')
        .select('*')
        .order('category', { ascending: true })
        .order('name', { ascending: true })

    if (error) {
        return <div>Error loading skills</div>
    }

    // Group by category
    const groupedSkills = (skills as Skill[]).reduce((acc, skill) => {
        const category = skill.category || 'Uncategorized'
        if (!acc[category]) acc[category] = []
        acc[category].push(skill)
        return acc
    }, {} as Record<string, Skill[]>)

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-serif font-bold tracking-tight">Skills</h1>
                    <p className="text-muted-foreground mt-2">Manage your technical skills.</p>
                </div>
                <Button asChild>
                    <Link href="/admin/skills/new">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Skill
                    </Link>
                </Button>
            </div>

            <div className="space-y-8">
                {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                    <div key={category} className="space-y-4">
                        <h2 className="text-xl font-bold border-b pb-2">{category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {categorySkills.map((skill) => (
                                <Card key={skill.id} className="relative group">
                                    <CardContent className="p-4 flex items-center justify-between">
                                        <div>
                                            <h3 className="font-bold">{skill.name}</h3>
                                            <div className="flex gap-2 mt-1">
                                                <Badge variant="secondary" className="text-xs">{skill.level}</Badge>
                                                <span className="text-xs text-muted-foreground self-center">{skill.years}</span>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                                            <Link href={`/admin/skills/${skill.id}`}>
                                                <Pencil className="w-4 h-4" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}

                {skills.length === 0 && (
                    <div className="text-center py-12 bg-muted/20 rounded-xl border border-dashed border-border">
                        <p className="text-muted-foreground">No skills found.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
