import React, { useState } from 'react';
import { auth } from '../Firebase';
import { sendPasswordResetEmail } from '../Firebase';
import { ChakraProvider, useToast } from '@chakra-ui/react';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handlePasswordResetRequest = () => {
   sendPasswordResetEmail(auth,email)
      .then(() => {
        // Password reset email sent successfully
        // Display a success toast
        toast({
          title: 'Password Reset Email Sent',
          description: `Password reset instructions sent to ${email}`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        // Handle error: display an error message or take appropriate action
        console.error(error);
        toast({
          title: 'Error',
          description: 'Failed to send reset email. Please check your email and try again.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <ChakraProvider>
    <div>
      <h1 style={{fontSize:"40px", fontWeight:"700"}}>Password Reset</h1>
      <label style={{fontSize:"26px", fontWeight:"500"}}>Email:</label>
      <input
      style={{border: '1px solid #ccc', // Border styling
      borderRadius: '4px', // Border radius
      padding: '8px',width:"20%"}}
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
     <button
        onClick={handlePasswordResetRequest}
        style={{
          backgroundColor: '#444444', // Background color of the button
          color: 'white', // Text color of the button
          padding: '10px 20px', // Padding
          border: 'none', // Remove button border
          borderRadius: '4px', // Button border radius
          cursor: 'pointer', // Cursor style on hover
          marginTop: '10px',
          marginBottom:"10rem" // Margin from the top
        }}
        // Apply hover effect to change background color on hover
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#eb4f36';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#444444';
        }}
      >
        Request Password Reset
      </button>
    </div>
    </ChakraProvider>
  );
};

export default PasswordReset;
