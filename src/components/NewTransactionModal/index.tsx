import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { Container,RadioBox,TransactionTypeContainer } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import {useTransactions } from '../../hooks/useTransactions';



interface NewTransactionModalProps {
     isOpen: boolean;
     onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

     const {createTransaction} = useTransactions();


     const [title, setTitle] = useState('');
     const [value, setValue] = useState(0);
     const [category, setCategory] = useState("");
     const [type, setType] = useState('deposit');

     async function handleCreateNewTransaction(event: FormEvent) {
          event.preventDefault();
          await createTransaction({
               title,
               category,
               type,
               value
          })

          setTitle('');
          setValue(0);
          setCategory('');
          setType('');
          
          onRequestClose();
     }


     return (
          <Modal
               overlayClassName={'react-modal-overlay'}
               className="react-modal-content"
               isOpen={isOpen}
               onRequestClose={onRequestClose}
          >
               <button type='button' onClick={onRequestClose} className="react-modal-close">
                    <img src={closeImg} alt="Fechar modal" />
               </button>
               <Container onSubmit={handleCreateNewTransaction}>
                    <h2>Cadastrar transação</h2>

                    <input
                         placeholder='Título'
                         value={title}
                         onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                         type="number"
                         placeholder='Preço'
                         value={value}
                         onChange={(e) => setValue(Number(e.target.value))}
                    />

                    <TransactionTypeContainer>
                         <RadioBox 
                              type='button'

                              onClick={() => setType('deposit')}
                              isActive={type === 'deposit'}
                              activeColor="green"
                         >
                              <img src={incomeImg} alt="Entrada" />
                              <span>Entrada</span>
                         </RadioBox>

                         <RadioBox 
                              type='button'
                             
                              onClick={() => setType('withdraw')}
                              isActive={type === 'withdraw'}
                              activeColor="red"
                         >
                              <img src={outcomeImg} alt="Saída" />
                              <span>Saída</span>
                         </RadioBox>
                    </TransactionTypeContainer>

                    <input
                         placeholder='Categoria'
                         value={category}
                         onChange={(e) => setCategory(e.target.value)}
                    />

                    <button type="submit">
                         Cadastrar
                    </button>
               </Container>
          </Modal>
     )
}