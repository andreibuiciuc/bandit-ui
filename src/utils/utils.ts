import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export interface CustomConfig {
  customClass?: string 
}

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function html(templates: TemplateStringsArray): string {
  return templates.join('')
}