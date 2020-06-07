import React from 'react';
import { useTransition } from 'react-spring';
import { Containter } from './styles';
import { ToastMessage } from '../../hooks/toast';
import Toast from './Toast';
interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer:React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    }
    );
  return (
    <Containter>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Containter>
  );
}

export default ToastContainer;
