import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OmbudsOfficeMessages from '@/components/OmbudsOfficeMessages/OmbudsOfficeMessages';
import ExternalLinksVertical from '@/components/ExternalLinksVertical';
import {
  getTicketByProtocol,
  requestReplyToken,
  replyTicketByProtocol,
} from '@/services/ticketService';
import styles from './ombudsOfficeMessages.module.css';

const OmbudsOfficeMessagesPage = () => {
  const { protocol } = useParams();
  const [ticketData, setTicketData] = useState(null);
  const [tokenRequested, setTokenRequested] = useState(false);
  const [replyToken, setReplyToken] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await getTicketByProtocol(protocol);
        setTicketData(response);
      } catch (err) {
        console.error('Erro ao buscar ticket:', err);
      }
    };

    if (protocol) fetchTicket();
  }, [protocol]);

  const handleRequestToken = async () => {
    try {
      await requestReplyToken(protocol);
      setTokenRequested(true);
    } catch (err) {
      alert(err.message);
      if (
        err.message ===
        'Já existe um código de verificação ativo. Verifique seu e-mail.'
      ) {
        setTokenRequested(true);
      }
    }
  };

  const handleSendReply = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await replyTicketByProtocol(protocol, newMessage, replyToken);
      alert('Resposta enviada com sucesso!');
      setReplyToken('');
      setNewMessage('');
      setTokenRequested(false);
      const updatedTicket = await getTicketByProtocol(protocol);
      setTicketData(updatedTicket);
    } catch (err) {
      console.error('Erro ao enviar resposta:', err);
      alert('Erro ao enviar resposta. Verifique o token.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.postWrapper}>
        {ticketData ? (
          <OmbudsOfficeMessages
            ticket={ticketData}
            onRequestToken={handleRequestToken}
            onSendReply={handleSendReply}
            tokenRequested={tokenRequested}
            replyToken={replyToken}
            setReplyToken={setReplyToken}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            loading={loading}
          />
        ) : (
          <div className={styles.notFound}>
            Ticket não encontrado ou ainda carregando.
          </div>
        )}
      </div>
      <div className={styles.sidebar}>
        <ExternalLinksVertical />
      </div>
    </div>
  );
};

export default OmbudsOfficeMessagesPage;
