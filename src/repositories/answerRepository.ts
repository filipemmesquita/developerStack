import { prisma } from "../config/database";
import { CreateAnswerData } from '../types/answerTypes';

export async function insert(createAnswerData:CreateAnswerData) {
    await prisma.answers.create({
        data:createAnswerData,
    });
}
export async function getById(questionId:number){
    const answers = await prisma.questions.findUnique({
        where: {
            id:questionId,
        },
        select:{
            id:true,
            askedBy:true,
            question:true,
            answers: {
                select:{
                    answeredBy:true,
                    answer:true,
                }
            }
        }
    })
    return answers;
}