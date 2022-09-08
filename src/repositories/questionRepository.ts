import { prisma } from "../config/database";
import { CreateQuestionData } from '../types/questionTypes';

export async function insert(createQuestionData:CreateQuestionData) {
    await prisma.questions.create({
        data:createQuestionData,
    });
}

export async function getAll(){
    return prisma.questions.findMany();
}