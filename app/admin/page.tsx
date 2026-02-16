import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createClient } from '@/utils/supabase/server'
import { FolderGit2, Briefcase, Wrench } from "lucide-react"

export default async function AdminDashboard() {
    const supabase = await createClient()

    // Fetch counts or just links
    const { count: projectsCount } = await supabase.from('projects').select('*', { count: 'exact', head: true })
    const { count: experienceCount } = await supabase.from('experience').select('*', { count: 'exact', head: true })
    const { count: skillsCount } = await supabase.from('skills').select('*', { count: 'exact', head: true })

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-serif font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground mt-2">Welcome back! Here's an overview of your portfolio content.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                        <FolderGit2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{projectsCount || 0}</div>
                        <p className="text-xs text-muted-foreground">Active projects</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Experience Items</CardTitle>
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{experienceCount || 0}</div>
                        <p className="text-xs text-muted-foreground">Career positions</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Skills</CardTitle>
                        <Wrench className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{skillsCount || 0}</div>
                        <p className="text-xs text-muted-foreground">Across all categories</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
