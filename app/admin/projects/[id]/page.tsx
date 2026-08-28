import { createClient } from '@/utils/supabase/server'
import { ProjectForm } from '@/components/admin/project-form'
import { notFound } from 'next/navigation'
import { Project } from '@/types'
import { connection } from 'next/server'

interface EditProjectPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function EditProjectPage({ params }: EditProjectPageProps) {
    await connection()
    const { id } = await params

    const numId = Number(id)
    if (!id || isNaN(numId) || numId <= 0) {
        notFound()
    }


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
