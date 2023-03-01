import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React, { useState } from 'react';
import { postQuestion } from '../../redux/slicer/question';
import { useDispatch } from 'react-redux';

const AddQuestionDialog = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const [langCode, setLangCode] = useState('en');
  const [question, setQuestion] = useState('');
  const [answerA, setAnswerA] = useState('');
  const [answerB, setAnswerB] = useState('');
  const [answerC, setAnswerC] = useState('');
  const [answerD, setAnswerD] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [difficulty, setDifficulty] = useState('kolay');
  const correctAnswerHandler = (e) => {
    setCorrectAnswer(e.target.value);
  };
  const questionHandler = (e) => {
    setQuestion(e.target.value);
  };

  const answerAhandler = (e) => {
    setAnswerA(e.target.value);
  };
  const answerBhandler = (e) => {
    setAnswerB(e.target.value);
  };
  const answerChandler = (e) => {
    setAnswerC(e.target.value);
  };
  const answerDhandler = (e) => {
    setAnswerD(e.target.value);
  };

  const cleanForm = () => {
    setQuestion('');
    setAnswerA('');
    setAnswerB('');
    setAnswerC('');
    setAnswerD('');
    setCorrectAnswer('');
  };
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Soru Oluştur</DialogTitle>
      <DialogContent>
        <div>
          <h6>Zorluk</h6>
          <select
            onChange={(e) => {
              setDifficulty(e.target.value);
            }}
            className="form-select"
            aria-label="Default select example"
          >
            <option defaultValue={'kolay'} value="kolay">
              Kolay
            </option>
            <option value="orta">Orta</option>
            <option value="zor">Zor</option>
          </select>
          <h6>Hedef Dil</h6>
          <select
            onChange={(e) => {
              setLangCode(e.target.value);
            }}
            className="form-select"
            aria-label="Default select example"
          >
            <option defaultValue={'en'} value="en">
              İngilizce
            </option>
            <option value="tr">Türkçe</option>
            <option value="ar">Arapça</option>
            <option value="fr">Fransızca</option>
          </select>
          <h6>Soru</h6>
          <input
            onChange={questionHandler}
            value={question}
            type="text"
            className="form-control"
          />
          <h6>Cevap A</h6>
          <input
            value={answerA}
            onChange={answerAhandler}
            type="text"
            className="form-control"
          />
          <h6>Cevap B</h6>
          <input
            value={answerB}
            onChange={answerBhandler}
            type="text"
            className="form-control"
          />
          <h6>Cevap C</h6>
          <input
            value={answerC}
            onChange={answerChandler}
            type="text"
            className="form-control"
          />
          <h6>Cevap D</h6>
          <input
            onChange={answerDhandler}
            value={answerD}
            type="text"
            className="form-control"
          />

          <h6>Doğru Cevap</h6>
          <ul className="list-group">
            <div onChange={correctAnswerHandler.bind(this)}>
              <li className="list-group-item">
                A <input value={answerA} type="radio" name="A" id="A" />
              </li>
              <li className="list-group-item">
                B <input value={answerB} type="radio" name="A" id="A" />
              </li>
              <li className="list-group-item">
                C <input value={answerC} type="radio" name="A" id="A" />
              </li>
              <li className="list-group-item">
                D <input value={answerD} type="radio" name="A" id="A" />
              </li>
            </div>
          </ul>
        </div>
      </DialogContent>
      <DialogActions>
        <button onClick={onClose} className="btn btn-danger">
          Vazgeç
        </button>
        <button
          onClick={() => {
            dispatch(
              postQuestion({
                question: question,
                answerA: answerA,
                answerB: answerB,
                answerC: answerC,
                answerD: answerD,
                answerCorrect: correctAnswer,
                difficulty: difficulty,
                langCode: langCode,
              })
            );
            cleanForm();
            onClose();
          }}
          className="btn btn-success"
        >
          Oluştur
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default AddQuestionDialog;
