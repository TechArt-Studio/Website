
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
      // Here you would integrate with Resend API
      // For now, we'll simulate the subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "订阅成功！",
        description: "感谢您订阅我们的新闻通讯。",
      });
      
      form.reset();
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "订阅失败",
        description: "请稍后重试。",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-black/40 border-white/10">
      <CardHeader>
        <CardTitle className="text-white">订阅新闻</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "请输入邮箱地址",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "请输入有效的邮箱地址"
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="输入您的邮箱地址"
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
              className="w-full bg-white text-black hover:bg-gray-200"
            >
              <Mail className="mr-2 w-4 h-4" />
              {isLoading ? '提交中...' : '订阅'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default NewsletterSubscription;
