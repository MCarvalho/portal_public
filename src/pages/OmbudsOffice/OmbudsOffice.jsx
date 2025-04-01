import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { createTicket } from '@/services/ticketService';
import OmbudsOffice from '@/components/OmbudsOffice/OmbudsOffice';
import ExternalLinksVertical from '@/components/ExternalLinksVertical';
import styles from './ombudsOffice.module.css';

const OmbudsOfficePage = () => {
  const navigate = useNavigate();

  const [choice, setChoice] = useState(null);
  const [protocol, setProtocol] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    content: '',
  });

  const handleProtocolSubmit = (e) => {
    e.preventDefault();
    if (protocol.trim()) {
      navigate(`/ombudsOffice/messages/${protocol.trim()}`);
    }
  };

  const handleNewTicketSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createTicket(formData);
      if (response?.protocol) {
        setFormData({ name: '', email: '', cpf: '', content: '' });
        navigate(`/ombudsOffice/messages/${response.protocol}`);
      } else {
        alert('Erro ao abrir chamado. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao abrir chamado:', error);
      alert('Erro ao abrir chamado. Tente novamente.');
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.postWrapper}>
        <OmbudsOffice
          choice={choice}
          setChoice={setChoice}
          protocol={protocol}
          setProtocol={setProtocol}
          formData={formData}
          setFormData={setFormData}
          onSubmitProtocol={handleProtocolSubmit}
          onSubmitNewTicket={handleNewTicketSubmit}
        />
      </div>
      <div className={styles.sidebar}>
        <ExternalLinksVertical />
      </div>
    </div>
  );
};
export default OmbudsOfficePage;
