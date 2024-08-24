'use client';

import { Card, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface ResumeCardProps {
  title: string;
  subtitle?: string;
  href?: string;
  description?: string;
}
export const ResumeCard = ({
  title,
  subtitle,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link href='#' className='block cursor-pointer' onClick={handleClick}>
      <Card className='flex h-full transform flex-col rounded-lg shadow-lg transition-transform hover:scale-105'>
        <div className='flex-grow p-4'>
          <CardHeader>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg font-semibold sm:text-base'>
                {title}
                <ChevronRightIcon
                  className={cn(
                    'ml-2 h-5 w-5 transition-transform duration-300',
                    isExpanded ? 'rotate-90' : 'rotate-0'
                  )}
                />
              </h3>
            </div>
            {subtitle && (
              <div className='text-sm text-gray-500'>{subtitle}</div>
            )}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? 'auto' : 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className='mt-4 text-sm text-gray-700 dark:text-gray-200'
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
