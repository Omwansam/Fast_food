import { Redirect, Slot } from 'expo-router';
import React from 'react';

export default function _layout() { 
    const isAuthenticated = false; // Replace with your authentication logic

    if (!isAuthenticated) 
        return <Redirect href="/sign-in" />
        // If the user is not authenticated, you can redirect them to the sign-in page
        // or show a message indicating that they need to sign in.
  return <Slot />
}