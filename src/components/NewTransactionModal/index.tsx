import { useState } from 'react';
import { Container } from './styles';
import Modal from 'react-modal';


interface NewTransactionModalProps {
     isOpen: boolean;
     onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

     return (
          <Modal
               overlayClassName={'react-modal-overlay'}
               className="react-modal-content"
               isOpen={isOpen}
               onRequestClose={onRequestClose}
          >

               <Container>
                    <h2>Cadastrar transação</h2>

                    <input
                         placeholder='Título'
                    />

                    <input
                         type="number"
                         placeholder='Valor'
                    />

                    <input
                         placeholder='Categoria'
                    />

                    <button type="submit">
                         Cadastrar
                    </button>
               </Container>
          </Modal>
     )
}