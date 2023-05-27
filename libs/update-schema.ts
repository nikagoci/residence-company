import { z } from "zod";

export const schema = z.object({
    balconies: z.record(z.number({  invalid_type_error: "Balcony Should Be a Number"}).positive().nullable().transform(value => value ?? NaN)),
    bedrooms: z.record(z.number({  invalid_type_error: "Bedroom Should Be a Number"}).positive().nullable().transform(value => value ?? NaN)),
    wetPoints: z.record(z.number({  invalid_type_error: "Wet Point Should Be a Number"}).positive().nullable().transform(value => value ?? NaN)),
    price: z.number({  invalid_type_error: "Price Should Be a Number"}).positive().min(10000).max(100000),
    condition: z.enum(["sale", "sold"]),
    livingArea: z.number({  invalid_type_error: "Living Area a Should Be Number"}).positive().min(1).max(500),
})