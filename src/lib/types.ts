export type Class = 'Class 11' | 'Class 12'
export type Subject = 'Mathematics' | 'Computer Science' | 'Economics' | 'English'
export type AnswerMode = 'explain' | 'solve' | 'short' | 'detailed' | 'summarize' | 'revision' | 'practice' | 'quiz' | 'exam'

export interface StudyQuestion {
  class: Class
  subject: Subject
  topic: string
  question: string
  mode: AnswerMode
}

export interface StudyAnswer {
  explanation: string
  concepts: string[]
  example?: string
  examAnswer?: string
  practiceQuestions?: string[]
  revisionNotes?: string
}