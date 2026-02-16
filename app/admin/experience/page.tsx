import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Plus, Pencil, Trash2, Briefcase, Calendar } from 'lucide-react'
import { Experience } from '@/types'

export const dynamic = 'force-dynamic'

export default async function AdminExperiencePage() {
    const supabase = await createClient()

    const { data: experience, error } = await supabase
        .from('experience')
        .select('*')
        .order('id', { ascending: false }) // Newest first usually

    if (error) {
        return <div>Error loading experience</div>
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-serif font-bold tracking-tight">Experience</h1>
                    <p className="text-muted-foreground mt-2">Manage your career history.</p>
                </div>
                <Button asChild>
                    <Link href="/admin/experience/new">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Position
                    </Link>
                </Button>
            </div>

            <div className="space-y-4">
                {(experience as Experience[]).map((exp) => (
                    <Card key={exp.id} className="overflow-hidden">
                        <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-start">

                            <div className="flex-1 space-y-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold">{exp.title}</h3>
                                        <p className="text-lg text-primary font-medium flex items-center gap-2">
                                            <Briefcase className="w-4 h-4" />
                                            {exp.company}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {exp.start_date} - {exp.end_date}
                                    </span>
                                    <span>•</span>
                                    <span>{exp.location}</span>
                                </div>

                                <p className="text-muted-foreground mt-2 line-clamp-2">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-3">
                                    {exp.technologies?.map((tech) => (
                                        <span key={tech} className="text-xs bg-muted px-2 py-1 rounded-md border border-border">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex md:flex-col gap-2 w-full md:w-auto mt-4 md:mt-0">
                                <Button variant="outline" size="sm" asChild>
                                    <Link href={`/admin/experience/${exp.id}`}>
                                        <Pencil className="w-4 h-4 mr-2" />
                                        Edit
                                    </Link>
                                </Button>
                                <Button variant="outline" size="icon" className="text-destructive hover:bg-destructive/10">
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>

                        </CardContent>
                    </Card>
                ))}

                {experience.length === 0 && (
                    <div className="text-center py-12 bg-muted/20 rounded-xl border border-dashed border-border">
                        <p className="text-muted-foreground">No experience entries found.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
