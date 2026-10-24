
"use client";

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { generateProductDescription } from '@/ai/flows/admin-generate-product-description';
import { Sparkles, Copy, Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminDescriptionGenerator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const { toast } = useToast();

  const [form, setForm] = useState({
    productName: "",
    category: "coffee",
    attributes: "",
    tags: ""
  });

  const handleGenerate = async () => {
    if (!form.productName) {
      toast({ title: "Error", description: "Product name is required", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const output = await generateProductDescription({
        productName: form.productName,
        category: form.category,
        attributes: form.attributes.split(',').map(s => s.trim()).filter(Boolean),
        tags: form.tags.split(',').map(s => s.trim()).filter(Boolean),
      });
      setResult(output.description);
    } catch (error) {
      toast({ title: "Error", description: "Failed to generate description.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    toast({ title: "Copied", description: "Description copied to clipboard." });
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <h1 className="text-3xl font-headline font-light uppercase tracking-[0.2em] mb-2">AI Content Assistant</h1>
            <p className="font-body italic text-muted-foreground">Generate luxury boutique descriptions in seconds.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle className="font-headline text-lg tracking-widest uppercase">Product Details</CardTitle>
                <CardDescription className="font-body italic text-xs">Enter key features to help the AI craft your story.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest">Product Name</Label>
                  <Input
                    placeholder="e.g. Silk Velvet Cushion"
                    value={form.productName}
                    onChange={e => setForm({ ...form, productName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest">Category</Label>
                  <select
                    className="w-full h-10 px-3 py-2 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    value={form.category}
                    onChange={e => setForm({ ...form, category: e.target.value })}
                  >
                    <option value="coffee">Coffee</option>
                    <option value="brunch">Brunch</option>
                    <option value="dessert">Dessert</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest">Key Attributes (comma separated)</Label>
                  <Textarea
                    placeholder="Hand-woven, 100% silk, locally sourced dyes"
                    value={form.attributes}
                    onChange={e => setForm({ ...form, attributes: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase tracking-widest">Tags</Label>
                  <Input
                    placeholder="luxury, sustainable, artisan"
                    value={form.tags}
                    onChange={e => setForm({ ...form, tags: e.target.value })}
                  />
                </div>
                <Button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="w-full font-headline uppercase tracking-[0.2em] gap-2"
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4" />}
                  Generate Description
                </Button>
              </CardContent>
            </Card>

            <div className="flex flex-col h-full">
              <div className="flex-1 min-h-[300px] bg-white border rounded-lg p-6 flex flex-col relative overflow-hidden">
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                  <h3 className="font-headline text-xs uppercase tracking-[0.2em] text-accent">Generated Preview</h3>
                  {result && (
                    <Button variant="ghost" size="icon" onClick={copyToClipboard} className="h-8 w-8">
                      <Copy className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div className="flex-1 flex items-center justify-center">
                  {loading ? (
                    <div className="text-center space-y-4">
                      <Loader2 className="h-8 w-8 animate-spin mx-auto text-accent/50" />
                      <p className="font-body italic text-sm text-muted-foreground">Crafting your luxury description...</p>
                    </div>
                  ) : result ? (
                    <p className="font-body italic text-lg leading-relaxed animate-in fade-in duration-700">
                      "{result}"
                    </p>
                  ) : (
                    <div className="text-center opacity-40">
                      <Sparkles className="h-12 w-12 mx-auto mb-4" />
                      <p className="font-body italic text-sm">Waiting for inspiration...</p>
                    </div>
                  )}
                </div>
                <div className="mt-4 pt-4 border-t flex justify-between items-center">
                  <span className="text-[10px] font-headline uppercase tracking-widest text-muted-foreground">Powered by Milk Tree AI</span>
                  {result && (
                    <span className="text-[10px] font-body italic text-muted-foreground">{result.split(' ').length} words</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
