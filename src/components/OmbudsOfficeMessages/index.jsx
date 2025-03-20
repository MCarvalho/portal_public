import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './styles.module.css';
import BackButton from '../BackButton';

const OmbudsOfficeMessages = () => {
  const { protocol } = useParams();
  const { fontSize, contrast } = useContext(ThemeContext);

  const containerStyle = {
    fontSize: `${fontSize}px`,
    backgroundColor: contrast === 'normal' ? '#fff' : '#222',
    color: contrast === 'normal' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const [messages, setMessages] = useState([
    {
      id: 1,
      author: 'User A',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      author: 'Support',
      content:
        'Suspendisse potenti. Fusce sit amet purus vel arcu consequat interdum.',
    },
    {
      id: 3,
      author: 'User A',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    const newMsg = {
      id: messages.length + 1,
      author: 'You',
      content: newMessage.trim(),
    };
    setMessages([...messages, newMsg]);
    setNewMessage('');
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [protocol]);

  return (
    <div className={styles.container} style={containerStyle}>
      <h1 className={styles.title}>Mensagens para o Protocolo: {protocol}</h1>
      <div className={styles.messagesList}>
        {messages.map((msg) => (
          <div key={msg.id} className={styles.messageItem}>
            <strong>{msg.author}</strong>
            <p>{msg.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={styles.newMessageForm}>
        <label htmlFor="newMessage" className={styles.label}>
          Nova Mensagem:
        </label>
        <textarea
          id="newMessage"
          name="newMessage"
          placeholder="Digite sua mensagem..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className={styles.textarea}
          required
        ></textarea>
        <button type="submit" className={styles.submitButton}>
          Enviar Mensagem
        </button>
      </form>
      <BackButton>Voltar</BackButton>
    </div>
  );
};

export default OmbudsOfficeMessages;
