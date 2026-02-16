import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, Pencil, Trash2, Quote, User } from 'lucide-react'
import { Testimonial } from '@/types'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const dynamic = 'force-dynamic'

export default async function AdminTestimonialsPage() {
    const supabase = await createClient()

    const { data: testimonials, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('id', { ascending: true })

    if (error) {
        return <div>Error loading testimonials</div>
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-serif font-bold tracking-tight">Testimonials</h1>
                    <p className="text-muted-foreground mt-2">Manage social proof and reviews.</p>
                </div>
                <Button asChild>
                    <Link href="/admin/testimonials/new">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Testimonial
                    </Link>
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {(testimonials as Testimonial[]).map((testimonial) => (
                    <Card key={testimonial.id} className="overflow-hidden flex flex-col">
                        <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={testimonial.avatar_url || ""} alt={testimonial.name} />
                                <AvatarFallback>{testimonial.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <CardTitle className="text-base font-medium">
                                    {testimonial.name}
                                </CardTitle>
                                <p className="text-xs text-muted-foreground">
                                    {testimonial.role} {testimonial.company && `@ ${testimonial.company}`}
                                </p>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col pt-4">
                            <div className="relative pl-6 mb-4 flex-1">
                                <Quote className="absolute left-0 top-0 h-4 w-4 text-muted-foreground/30" />
                                <p className="text-sm text-muted-foreground line-clamp-4 italic">
                                    "{testimonial.content}"
                                </p>
                            </div>

                            <div className="flex items-center gap-2 pt-4 border-t border-border mt-auto">
                                <Button variant="outline" size="sm" className="flex-1" asChild>
                                    <Link href={`/admin/testimonials/${testimonial.id}`}>
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

                {testimonials.length === 0 && (
                    <div className="col-span-full text-center py-12 bg-muted/20 rounded-xl border border-dashed border-border">
                        <p className="text-muted-foreground">No testimonials found. Add some social proof!</p>
                    </div>
                )}
            </div>
        </div>
    )
}
