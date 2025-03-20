import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './styles.module.css';

const OmbudsOffice = () => {
  const { fontSize, contrast } = useContext(ThemeContext);
  const navigate = useNavigate();

  // Estilo dinâmico do container com base no ThemeContext
  const containerStyle = {
    fontSize: `${fontSize}px`,
    backgroundColor: contrast === 'normal' ? '#fff' : '#222',
    color: contrast === 'normal' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  };

  // Estado para armazenar a escolha do usuário:
  // null = ainda não escolheu, 'consult' = consultar chamado existente, 'new' = abrir novo chamado.
  const [choice, setChoice] = useState(null);
  const [protocol, setProtocol] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Função para enviar o protocolo e navegar para a página de mensagens
  const handleProtocolSubmit = (e) => {
    e.preventDefault();
    if (protocol.trim()) {
      navigate(`/ombudsOffice/messages/${protocol.trim()}`);
    }
  };

  // Função para enviar um novo chamado
  const handleNewTicketSubmit = (e) => {
    e.preventDefault();
    console.log('Novo chamado enviado:', formData);
    alert('Seu chamado foi aberto com sucesso!');
    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return (
    <div className={styles.container} style={containerStyle}>
      <h1 className={styles.title}>OmbudsOffice</h1>
      <p className={styles.subtitle}>
        Você já possui um chamado? Se sim, consulte-o inserindo seu número de
        protocolo. Caso contrário, abra um novo chamado.
      </p>

      {choice === null && (
        <div className={styles.choiceContainer}>
          <button
            onClick={() => setChoice('consult')}
            className={styles.choiceButton}
          >
            Consultar chamado existente
          </button>
          <button
            onClick={() => setChoice('new')}
            className={styles.choiceButton}
          >
            Abrir novo chamado
          </button>
        </div>
      )}

      {choice === 'consult' && (
        <div className={styles.formContainer}>
          <form onSubmit={handleProtocolSubmit} className={styles.protocolForm}>
            <label htmlFor="protocol" className={styles.label}>
              Protocolo:
            </label>
            <input
              type="text"
              id="protocol"
              name="protocol"
              placeholder="Insira o número do protocolo"
              value={protocol}
              onChange={(e) => setProtocol(e.target.value)}
              className={styles.input}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Consultar
            </button>
            <button
              onClick={() => setChoice(null)}
              className={styles.backButton}
            >
              Voltar
            </button>
          </form>
        </div>
      )}

      {choice === 'new' && (
        <div className={styles.formContainer}>
          <form onSubmit={handleNewTicketSubmit} className={styles.form}>
            <label htmlFor="name" className={styles.label}>
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={styles.input}
              required
            />

            <label htmlFor="email" className={styles.label}>
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={styles.input}
              required
            />

            <label htmlFor="message" className={styles.label}>
              Mensagem:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Escreva sua mensagem aqui..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={styles.textarea}
              required
            ></textarea>

            <button type="submit" className={styles.submitButton}>
              Enviar Mensagem
            </button>
            <button
              onClick={() => setChoice(null)}
              className={styles.backButton}
            >
              Voltar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default OmbudsOffice;
