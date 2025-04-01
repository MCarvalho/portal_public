import api from './api'; // ou direto do axios configurado

export const createTicket = async (payload) => {
  const response = await api.post('/public/tickets', payload);
  return response.data;
};

export const getTicketByProtocol = async (protocol) => {
  const response = await api.get(`/public/tickets/${protocol}`);
  return response.data;
};

export const requestReplyToken = async (protocol) => {
  const response = await api.post(
    `/public/tickets/${protocol}/request-reply-token`,
  );
  return response.data;
};

export const replyTicketByProtocol = async (protocol, message, token) => {
  const response = await api.post(`/public/tickets/${protocol}/reply`, {
    message,
    token,
  });
  return response.data;
};
