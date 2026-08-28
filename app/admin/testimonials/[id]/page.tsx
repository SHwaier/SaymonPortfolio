import { createClient } from '@/utils/supabase/server'
import { TestimonialForm } from '@/components/admin/testimonial-form'
import { notFound } from 'next/navigation'
import { Testimonial } from '@/types'
import { connection } from 'next/server'

interface EditTestimonialPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function EditTestimonialPage({ params }: EditTestimonialPageProps) {
    await connection()
    // Await the params object
    const { id } = await params

    if (!id || id === '[id]') {
        return null
    }

    const supabase = await createClient()

    // Fetch testimonial data
    const { data: testimonial, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('id', id)
        .single()

    if (error || !testimonial) {
        notFound()
    }

    return <TestimonialForm initialData={testimonial as Testimonial} />
}
