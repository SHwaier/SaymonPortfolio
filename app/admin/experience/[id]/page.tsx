import { createClient } from '@/utils/supabase/server'
import { ExperienceForm } from '@/components/admin/experience-form'
import { notFound } from 'next/navigation'
import { Experience } from '@/types'
import { connection } from 'next/server'

interface EditExperiencePageProps {
    params: Promise<{
        id: string
    }>
}

export default async function EditExperiencePage({ params }: EditExperiencePageProps) {
    await connection()
    const { id } = await params
    const numId = Number(id)
    if (!id || isNaN(numId) || numId <= 0) {
        notFound()
    }



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
