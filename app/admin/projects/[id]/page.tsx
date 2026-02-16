import { createClient } from '@/utils/supabase/server'
import { ProjectForm } from '@/components/admin/project-form'
import { notFound } from 'next/navigation'
import { Project } from '@/types'

interface EditProjectPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function EditProjectPage({ params }: EditProjectPageProps) {
    // Await the params object
    const { id } = await params

    const supabase = await createClient()

    // Fetch project data
    const { data: project, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single()

    if (error || !project) {
        notFound()
    }

    return <ProjectForm initialData={project as Project} />
}
