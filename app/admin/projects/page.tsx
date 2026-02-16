import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import { Project } from '@/types'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default async function AdminProjectsPage() {
    const supabase = await createClient()

    const { data: projects, error } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: true })

    if (error) {
        return <div>Error loading projects</div>
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-serif font-bold tracking-tight">Projects</h1>
                    <p className="text-muted-foreground mt-2">Manage your portfolio projects.</p>
                </div>
                <Button asChild>
                    <Link href="/admin/projects/new">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Project
                    </Link>
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {(projects as Project[]).map((project) => (
                    <Card key={project.id} className="overflow-hidden flex flex-col">
                        <div className="aspect-video w-full bg-muted relative overflow-hidden group">
                            {project.image ? (
                                <Image
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                    No Image
                                </div>
                            )}
                        </div>
                        <CardHeader>
                            <CardTitle className="flex justify-between items-start gap-2">
                                <span className="truncate" title={project.title}>{project.title}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col">
                            <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies?.slice(0, 3).map((tech) => (
                                    <span key={tech} className="text-xs bg-secondary/50 px-2 py-1 rounded-md">
                                        {tech}
                                    </span>
                                ))}
                                {(project.technologies?.length || 0) > 3 && (
                                    <span className="text-xs text-muted-foreground self-center">
                                        +{project.technologies.length - 3} more
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-2 pt-4 border-t border-border mt-auto">
                                <Button variant="outline" size="sm" className="flex-1" asChild>
                                    <Link href={`/admin/projects/${project.id}`}>
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

                {projects.length === 0 && (
                    <div className="col-span-full text-center py-12 bg-muted/20 rounded-xl border border-dashed border-border">
                        <p className="text-muted-foreground">No projects found. Create your first one!</p>
                    </div>
                )}
            </div>
        </div>
    )
}
