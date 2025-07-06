import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Bot, X } from 'lucide-react';

interface AiChatPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const AiChatPopup = ({ isOpen, onClose }: AiChatPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-primary" />
            PR Group Assistant
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center py-8 space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Bot className="w-8 h-8 text-primary" />
          </div>
          <p className="text-center text-muted-foreground">
            Hi! I'm your PR Group assistant. How can I help you with your construction and interior design needs today?
          </p>
          <Button 
            onClick={() => window.open('https://wa.me/918886663807', '_blank')}
            className="gradient-primary w-full"
          >
            Start Chat on WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AiChatPopup;