// use server'

/**
 * @fileOverview Personalizes the portfolio's introductory text based on visitor's profession or interests.
 *
 * - personalizeIntro - A function that handles the intro personalization process.
 * - PersonalizeIntroInput - The input type for the personalizeIntro function.
 * - PersonalizeIntroOutput - The return type for the personalizeIntro function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeIntroInputSchema = z.object({
  visitorProfession: z
    .string()
    .describe('The profession of the visitor, or their main interests.'),
  baseIntroText: z.string().describe('The base introductory text of the portfolio.'),
});
export type PersonalizeIntroInput = z.infer<typeof PersonalizeIntroInputSchema>;

const PersonalizeIntroOutputSchema = z.object({
  personalizedIntro: z
    .string()
    .describe('The personalized introductory text tailored to the visitor.'),
});
export type PersonalizeIntroOutput = z.infer<typeof PersonalizeIntroOutputSchema>;

export async function personalizeIntro(input: PersonalizeIntroInput): Promise<PersonalizeIntroOutput> {
  return personalizeIntroFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeIntroPrompt',
  input: {schema: PersonalizeIntroInputSchema},
  output: {schema: PersonalizeIntroOutputSchema},
  prompt: `You are an expert at personalizing introductory text for portfolios.

You will receive the visitor's profession or interests, and a base introductory text.

Your goal is to rewrite the base introductory text to be more relevant and engaging to the visitor, based on their profession or interests. Maintain a professional, friendly, and inviting tone.

Visitor Profession/Interests: {{{visitorProfession}}}

Base Introductory Text: {{{baseIntroText}}}

Personalized Introductory Text:`,
});

const personalizeIntroFlow = ai.defineFlow(
  {
    name: 'personalizeIntroFlow',
    inputSchema: PersonalizeIntroInputSchema,
    outputSchema: PersonalizeIntroOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
