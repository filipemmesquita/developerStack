import { CreateQuestionData } from '../types/questionTypes';
import * as questionRepository from '../repositories/questionRepository'


export async function insertQuestion(createQuestionData:CreateQuestionData){
    await questionRepository.insert(createQuestionData);
}

export async function getAllQuestions(){
    const questions=await questionRepository.getAll();
    return {questions:questions};
}