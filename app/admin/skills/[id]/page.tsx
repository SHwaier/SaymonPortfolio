import { createClient } from '@/utils/supabase/server'
import { SkillForm } from '@/components/admin/skill-form'
import { notFound } from 'next/navigation'
import { Skill } from '@/types'
import { connection } from 'next/server'

interface EditSkillPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function EditSkillPage({ params }: EditSkillPageProps) {
    await connection()
    const { id } = await params

    if (!id || id === '[id]') {
        return null
    }

    const supabase = await createClient()


    const { data: skill, error } = await supabase
        .from('skills')
        .select('*')
        .eq('id', id)
        .single()

    if (error || !skill) {
        notFound()
    }

    return <SkillForm initialData={skill as Skill} />
}
