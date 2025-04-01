import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';
import styles from './ombudsOfficeMessages.module.css';
import BackButton from '../BackButton';

const OmbudsOfficeMessages = ({
  ticket,
  onRequestToken,
  onSendReply,
  tokenRequested,
  replyToken,
  setReplyToken,
  newMessage,
  setNewMessage,
  loading,
}) => {
  const { fontSize, contrast } = useContext(ThemeContext);

  const containerStyle = {
    fontSize: `${fontSize}px`,
    backgroundColor: contrast === 'normal' ? '#fff' : '#222',
    color: contrast === 'normal' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!ticket) {
    return (
      <div className={styles.container} style={containerStyle}>
        <h1 className={styles.title}>Protocolo não encontrado.</h1>
        <BackButton>Voltar</BackButton>
      </div>
    );
  }

  return (
    <div className={styles.container} style={containerStyle}>
      <h1 className={styles.title}>Protocolo: {ticket.protocol}</h1>

      <div className={styles.messagesList}>
        <div className={styles.messageItem}>
          <strong>Mensagem original</strong>
          <p>{ticket.content}</p>
        </div>
        {ticket.messages?.map((msg) => (
          <div key={msg.id} className={styles.messageItem}>
            <strong>{msg.sentBy}</strong>
            <p>{msg.message}</p>
            <small>{new Date(msg.createdAt).toLocaleString()}</small>
          </div>
        ))}
      </div>

      <p
        className={styles.explanation}
        style={{
          backgroundColor: contrast === 'normal' ? '#f9f9f9' : '#1e1e1e',
          color: contrast === 'normal' ? '#000' : '#fff',
        }}
      >
        Para enviar uma nova mensagem, é necessário solicitar e validar um
        código de confirmação que será enviado para o e-mail informado no
        protocolo. Após o recebimento, insira o código no campo abaixo para
        ativar o envio da sua resposta.
      </p>

      <form onSubmit={onSendReply} className={styles.newMessageForm}>
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
        <div className={styles.actions}>
          {!tokenRequested ? (
            <button
              type="button"
              className={styles.tokenButton}
              onClick={onRequestToken}
              disabled={loading}
            >
              Solicitar código de confirmação
            </button>
          ) : (
            <input
              id="replyToken"
              name="replyToken"
              type="text"
              value={replyToken}
              onChange={(e) => setReplyToken(e.target.value)}
              className={styles.input}
              placeholder="Digite o código de verificação"
              required
            />
          )}
          <button
            type="submit"
            className={styles.submitButton}
            disabled={newMessage.trim() === '' || replyToken.trim() === ''}
          >
            Enviar Mensagem
          </button>
        </div>
      </form>

      <BackButton>Voltar</BackButton>
    </div>
  );
};

export default OmbudsOfficeMessages;
