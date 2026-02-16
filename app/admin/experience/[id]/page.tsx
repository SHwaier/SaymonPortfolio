import { createClient } from '@/utils/supabase/server'
import { ExperienceForm } from '@/components/admin/experience-form'
import { notFound } from 'next/navigation'
import { Experience } from '@/types'

interface EditExperiencePageProps {
    params: Promise<{
        id: string
    }>
}

export default async function EditExperiencePage({ params }: EditExperiencePageProps) {
    const { id } = await params
    const supabase = await createClient()

    const { data: experience, error } = await supabase
        .from('experience')
        .select('*')
        .eq('id', id)
        .single()

    if (error || !experience) {
        notFound()
    }

    return <ExperienceForm initialData={experience as Experience} />
}
