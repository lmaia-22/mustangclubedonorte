'use client'; // Ensures this component uses client-side rendering
import React, { useState } from 'react';
import { TeamMemberCard } from '@/components/team-card';
import { Button } from '@/components/ui/button'; // Assuming you have a button component in this path

const teamMembers = [
  { name: 'John Doe', role: 'Developer', picture: '/images/john.jpg', social: '/john' },
  { name: 'Jane Smith', role: 'Designer', picture: '/images/jane.jpg', social: '/jane' },
  { name: 'Alice Johnson', role: 'Project Manager', picture: '/images/alice.jpg', social: '/alice' },
  { name: 'Bob Brown', role: 'Tester', picture: '/images/bob.jpg', social: '/bob' },
  { name: 'Bob Brown', role: 'Tester', picture: '/images/bob.jpg', social: '/bob' },
  { name: 'Bob Brown', role: 'Tester', picture: '/images/bob.jpg', social: '/bob' },
  { name: 'Bob Brown', role: 'Tester', picture: '/images/bob.jpg', social: '/bob' },
  { name: 'Bob Brown', role: 'Tester', picture: '/images/bob.jpg', social: '/bob' },
  { name: 'Bob Brown', role: 'Tester', picture: '/images/bob.jpg', social: '/bob' },
  { name: 'Bob Brown', role: 'Tester', picture: '/images/bob.jpg', social: '/bob' },
  { name: 'Bob Brown', role: 'Tester', picture: '/images/bob.jpg', social: '/bob' },
  { name: 'Bob Brown', role: 'Tester', picture: '/images/bob.jpg', social: '/bob' },
  { name: 'Bob Brown', role: 'Tester', picture: '/images/bob.jpg', social: '/bob' },
  { name: 'Bob Brown', role: 'Tester', picture: '/images/bob.jpg', social: '/bob' },
  { name: 'Bob Brown', role: 'Tester', picture: '/images/bob.jpg', social: '/bob' },
  // Repeat to simulate a large list
  // Add up to more than 10 for testing purposes
];

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
          {teamMembers.slice(0, visibleCount).map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              picture={member.picture}
              social={member.social}
            />
          ))}
        </div>
  
        <div className='flex justify-center mt-8'>
          {visibleCount < teamMembers.length && (
            <Button onClick={loadMoreItems} className='px-4 py-2 bg-primary text-white rounded-md mx-2'>
              Mostrar mais
            </Button>
          )}
          {isShowLessVisible && visibleCount > ITEMS_PER_LOAD && (
            <Button onClick={showLessItems} className='px-4 py-2 bg-primary text-white rounded-md mx-2'>
              Mostrar menos
            </Button>
          )}
        </div>
      </div>
    );
  };
  
  export default TeamGrid;
