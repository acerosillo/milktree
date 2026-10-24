'use server';
/**
 * @fileOverview An AI tool to generate concise and appealing product descriptions for administrators.
 *
 * - generateProductDescription - A function that handles the product description generation process.
 * - AdminGenerateProductDescriptionInput - The input type for the generateProductDescription function.
 * - AdminGenerateProductDescriptionOutput - The return type for the generateProductDescription function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AdminGenerateProductDescriptionInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  category: z.string().describe('The category the product belongs to (e.g., jewelry, accessories, home decor).'),
  attributes: z.array(z.string()).describe('Key attributes or features of the product.'),
  tags: z.array(z.string()).describe('Relevant tags or keywords for the product.'),
});
export type AdminGenerateProductDescriptionInput = z.infer<typeof AdminGenerateProductDescriptionInputSchema>;

const AdminGenerateProductDescriptionOutputSchema = z.object({
  description: z.string().describe('A concise and appealing product description.'),
});
export type AdminGenerateProductDescriptionOutput = z.infer<typeof AdminGenerateProductDescriptionOutputSchema>;

export async function generateProductDescription(
  input: AdminGenerateProductDescriptionInput
): Promise<AdminGenerateProductDescriptionOutput> {
  return adminGenerateProductDescriptionFlow(input);
}

const productDescriptionPrompt = ai.definePrompt({
  name: 'productDescriptionPrompt',
  input: { schema: AdminGenerateProductDescriptionInputSchema },
  output: { schema: AdminGenerateProductDescriptionOutputSchema },
  prompt: `You are an expert marketing copywriter specializing in luxury boutique products. Your task is to create a concise and appealing product description for a new product.

Use the following information to craft the description:

Product Name: {{{productName}}}
Category: {{{category}}}
Attributes: {{#each attributes}}- {{{this}}}
{{/each}}Tags: {{#each tags}}- {{{this}}}
{{/each}}

Generate a description that highlights the product's unique qualities and benefits, suitable for a sophisticated online boutique. The description should be engaging and encourage customers to learn more or make a purchase. Focus on elegance, quality, and the emotional connection with the product. Ensure the description is no more than 3-4 sentences long.`,
});

const adminGenerateProductDescriptionFlow = ai.defineFlow(
  {
    name: 'adminGenerateProductDescriptionFlow',
    inputSchema: AdminGenerateProductDescriptionInputSchema,
    outputSchema: AdminGenerateProductDescriptionOutputSchema,
  },
  async (input) => {
    const { output } = await productDescriptionPrompt(input);
    return output!;
  }
);
