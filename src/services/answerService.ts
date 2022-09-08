import { CreateAnswerData } from '../types/answerTypes';
import * as answerRepository from '../repositories/answerRepository'



export async function insertAnswer(createAnswerData:CreateAnswerData , questionId:string|number){
    createAnswerData.questionId=Number(questionId);
    await answerRepository.insert(createAnswerData);
}

export async function getAnswers(questionId:string|number){
    const id=Number(questionId)
    const responseObject= await answerRepository.getById(id);
    if(!responseObject){
        throw(404);
    }
    return responseObject;

}