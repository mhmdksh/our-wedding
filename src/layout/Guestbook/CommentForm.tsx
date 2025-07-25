import { useState } from 'react';
import styled from '@emotion/styled';

const CommentForm = () => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Google Forms configuration from environment variables
  const GOOGLE_FORM_URL = import.meta.env.VITE_GOOGLE_FORM_URL || '';
  const NAME_FIELD_ID = import.meta.env.VITE_GOOGLE_FORM_NAME_FIELD || '';
  const MESSAGE_FIELD_ID = import.meta.env.VITE_GOOGLE_FORM_MESSAGE_FIELD || '';

  // Check if Google Forms is configured
  const isGoogleFormsConfigured = GOOGLE_FORM_URL && NAME_FIELD_ID && MESSAGE_FIELD_ID;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      alert('Please fill in your name and message. 🥹');
      return;
    }

    if (!isGoogleFormsConfigured) {
      alert('Guestbook is not configured yet. Please contact the couple directly.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create form data for Google Forms submission
      const formData = new FormData();
      formData.append(NAME_FIELD_ID, name);
      formData.append(MESSAGE_FIELD_ID, message);

      // Submit to Google Forms
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Forms
        body: formData,
      });

      // Success - clear form and show message
      alert('Message sent successfully! 💌');
      setName('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again. 🥲');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <NameInput
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isSubmitting}
        required
      />
      <MessageInput
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isSubmitting}
        required
        rows={4}
      />
      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Submit'}
      </SubmitButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: visible;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

const NameInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 12px;
  font-size: 1rem;
  line-height: 1.4;
  outline: none;
  border: 1px solid #ccc;
  font-family: inherit;
  font-weight: 300;
  
  &:focus {
    border-color: #e88ca6;
    box-shadow: 0 0 0 2px rgba(232, 140, 166, 0.2);
  }
  
  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const MessageInput = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 12px;
  font-size: 1rem;
  line-height: 1.5;
  outline: none;
  border: 1px solid #ccc;
  resize: vertical;
  font-family: inherit;
  font-weight: 300;
  min-height: 100px;
  
  &:focus {
    border-color: #e88ca6;
    box-shadow: 0 0 0 2px rgba(232, 140, 166, 0.2);
  }
  
  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid #e88ca6;
  background-color: #e88ca6;
  color: white;
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: #d67a96;
  }
  
  &:disabled {
    background-color: #ccc;
    border-color: #ccc;
    cursor: not-allowed;
  }
`;

export default CommentForm;