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
      <div className='mx-auto grid grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4'>
        {[...DATA.members]
          .sort((a, b) => a.name.localeCompare(b.name))
          .slice(0, visibleCount)
          .map((Membro, index) => (
            <TeamMemberCard
              key={index}
              name={Membro.name}
              role={Membro.role}
              picture={Membro.image}
              social={Membro.instagram}
            />
          ))}
      </div>

      <div className='mt-8 flex justify-center'>
        {visibleCount < DATA.members.length && (
          <Button
            onClick={loadMoreItems}
            className='mx-2 rounded-md bg-foreground px-4 py-2'
          >
            Mostrar mais
          </Button>
        )}
        {isShowLessVisible && visibleCount > ITEMS_PER_LOAD && (
          <Button
            onClick={showLessItems}
            className='mx-2 rounded-md bg-foreground px-4 py-2 text-white'
          >
            Mostrar menos
          </Button>
        )}
      </div>
    </div>
  );
};

export default TeamGrid;
