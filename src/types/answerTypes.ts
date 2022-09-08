import { answers } from "@prisma/client"
export type CreateAnswerData = Omit<answers, "id">;