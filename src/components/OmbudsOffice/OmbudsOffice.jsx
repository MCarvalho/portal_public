import React, { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';
import styles from './ombudsOffice.module.css';

const OmbudsOffice = ({
  choice,
  setChoice,
  protocol,
  setProtocol,
  formData,
  setFormData,
  onSubmitProtocol,
  onSubmitNewTicket,
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

  return (
    <div className={styles.container} style={containerStyle}>
      <h1 className={styles.title}>OmbudsOffice</h1>
      <p className={styles.subtitle}>
        Você já possui um chamado? Consulte-o com o protocolo ou abra um novo.
      </p>

      {choice === null && (
        <div className={styles.choiceContainer}>
          <button
            onClick={() => setChoice('consult')}
            className={styles.choiceButton}
          >
            Consultar
          </button>
          <button
            onClick={() => setChoice('new')}
            className={styles.choiceButton}
          >
            Novo Chamado
          </button>
        </div>
      )}

      {choice === 'consult' && (
        <form onSubmit={onSubmitProtocol} className={styles.formContainer}>
          <label className={styles.label}>Protocolo:</label>
          <input
            className={styles.input}
            type="text"
            value={protocol}
            onChange={(e) => setProtocol(e.target.value)}
            required
          />
          <button type="submit" className={styles.submitButton}>
            Consultar
          </button>
          <button onClick={() => setChoice(null)} className={styles.backButton}>
            Voltar
          </button>
        </form>
      )}

      {choice === 'new' && (
        <form onSubmit={onSubmitNewTicket} className={styles.formContainer}>
          <label className={styles.label}>Nome:</label>
          <input
            className={styles.input}
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <label className={styles.label}>E-mail:</label>
          <input
            className={styles.input}
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <label className={styles.label}>CPF:</label>
          <input
            className={styles.input}
            type="text"
            value={formData.cpf}
            onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
            required
          />
          <label className={styles.label}>Mensagem:</label>
          <textarea
            className={styles.textarea}
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            required
          ></textarea>
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
          <button onClick={() => setChoice(null)} className={styles.backButton}>
            Voltar
          </button>
        </form>
      )}
    </div>
  );
};

export default OmbudsOffice;
