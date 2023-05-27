import { z } from "zod";

export const schema = z.object({
    balconies: z.record(z.number().positive().nullable().transform(value => value ?? NaN)),
    bedrooms: z.record(z.number().positive().nullable().transform(value => value ?? NaN)),
    wetPoints: z.record(z.number().positive().nullable().transform(value => value ?? NaN)),
    price: z.number().positive().min(10000).max(100000),
    condition: z.enum(["sale", "sold"]),
    livingArea: z.number().positive().min(1).max(500),
})