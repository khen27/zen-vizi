import React from 'react';
import Tab4Profile from '../screens/Tab4Profile';

export default function TabFourScreen() {
  const handleBack = () => {
    // Navigation logic will be implemented later
    console.log('Back button pressed');
  };

  const handleInstagram = () => {
    // Instagram linking logic will be implemented later
    console.log('Instagram button pressed');
  };

  return (
    <Tab4Profile
      name="Karl"
      city="Prague"
      bio="I love anime, trying new amazing cuisine, and going on spontaneous excursions with new friends."
      imageSrc={require('@/assets/profile-example.png')}
      onBack={handleBack}
      onInstagram={handleInstagram}
    />
  );
} 