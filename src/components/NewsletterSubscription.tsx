
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CardDescription, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Resend } from 'resend';

interface NewsletterFormData {
  email: string;
}

const NewsletterSubscription = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<NewsletterFormData>({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsLoading(true);
    console.log('Subscribing email:', data.email);
    
    try {
      // Get the Resend API key from environment variables
      const resendApiKey = import.meta.env.VITE_RESEND_API_KEY;
      const audienceId = import.meta.env.VITE_RESEND_AUDIENCE_ID;
      
      if (!resendApiKey) {
        throw new Error('Resend API key not found');
      }

      if (!audienceId) {
        throw new Error('Resend Audience ID not found');
      }

      // Initialize Resend with the API key
      const resend = new Resend(resendApiKey);

      // Add contact to audience
      const result = await resend.contacts.create({
        email: data.email,
        firstName: '',
        lastName: '',
        unsubscribed: false,
        audienceId: audienceId,
      });

      console.log('Subscription result:', result);
      
      toast({
        title: "Subscription Successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm p-6 border border-white/5 hover:bg-white/10 transition-all duration-300 group">
      <div className="relative flex flex-1 flex-col justify-between gap-4">
        <div className="space-y-4">
          <CardTitle className="text-white">Subscribe to Newsletter</CardTitle>
          <CardDescription className="text-gray-400 text-lg">
            Stay updated with our latest news and updates
          </CardDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Please enter your email address",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        type="email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isLoading}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Mail className="mr-2 w-4 h-4" />
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
