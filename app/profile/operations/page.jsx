"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const OperationsPage = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   router.back("/profile");
  // }, [router]);
  // useEffect(() => {
  //   const handleBeforeUnload = (e) => {
  //     e.preventDefault();
  //     e.returnValue = ''; // This is for older browsers, and the actual value doesn't matter
  //     window.location.href = '/profile'; // Redirect to the '/profile' page
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);

  return (
    <div>OperationsPage</div>
  )
}

export default OperationsPage