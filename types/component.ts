import { z } from 'zod'
export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})
export type LoginInput = z.infer<typeof loginSchema>

export type LinkType = {
    link: string
    label: string
}

export type NestedLinkType = {
    links?: LinkType[]
} & LinkType
