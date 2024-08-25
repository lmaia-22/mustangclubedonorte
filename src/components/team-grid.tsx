'use client';
import React, { useState } from 'react';
import { TeamMemberCard } from '@/components/team-card';
import { Button } from '@/components/ui/button';
import { DATA } from '@/data/members';

const ITEMS_PER_LOAD = 12; // Number of items to load per "Mostrar mais" click

export const TeamGrid: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
    const [isShowLessVisible, setIsShowLessVisible] = useState(false);
  
    const loadMoreItems = () => {
      setVisibleCount((prevCount) => prevCount + ITEMS_PER_LOAD);
      setIsShowLessVisible(true); // Show the "Mostrar menos" button when items are loaded
    };
  
    const showLessItems = () => {
      setVisibleCount(ITEMS_PER_LOAD); // Reset to initial visible count
      setIsShowLessVisible(false); // Hide the "Mostrar menos" button
    };
  
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4 py-8 mx-auto'>
          {DATA.members.slice(0, visibleCount).map((Membro, index) => (
            <TeamMemberCard
              key={index}
              name={Membro.name}
              role={Membro.role}
              picture={Membro.image}
              social={Membro.instagram}
            />
          ))}
        </div>
  
        <div className='flex justify-center mt-8'>
          {visibleCount < DATA.members.length && (
            <Button onClick={loadMoreItems} className='px-4 py-2 bg-foreground rounded-md mx-2'>
              Mostrar mais
            </Button>
          )}
          {isShowLessVisible && visibleCount > ITEMS_PER_LOAD && (
            <Button onClick={showLessItems} className='px-4 py-2 bg-foreground text-white rounded-md mx-2'>
              Mostrar menos
            </Button>
          )}
        </div>
      </div>
    );
  };
  
  export default TeamGrid;
