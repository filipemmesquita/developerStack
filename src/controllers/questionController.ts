import { Request, Response } from 'express';
import * as questionServices from '../services/questionService'
import * as answerServices from '../services/answerService'

export async function createQuestion(req: Request, res: Response) {
  await questionServices.insertQuestion(req.body);
  return res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  await answerServices.insertAnswer(req.body , req.params.id);
  return res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const responseObject = await questionServices.getAllQuestions();
  return res.status(200).send(responseObject);
}

export async function getById(req: Request, res: Response) {
  const responseObject=await answerServices.getAnswers(req.params.id);
  return res.status(200).send(responseObject);
}
