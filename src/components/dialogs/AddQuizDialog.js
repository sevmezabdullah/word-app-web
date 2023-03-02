import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { postQuiz } from '../../redux/slicer/quiz';
const AddQuizDialog = ({ isOpen, onClose }) => {
  const questions = useSelector((state) => state.question.questions);
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const [langCode, setLangCode] = useState('en');
  const [difficulty, setDifficulty] = useState('kolay');
  const [title, setTitle] = useState('');
  const [exp, setExp] = useState('');

  const [willAddQuestion, setWillAddQuestion] = useState([]);

  const columns = [
    {
      title: 'Soru ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Zorluk',
      dataIndex: 'difficulty',
      key: 'difficulty',
    },
    {
      title: 'Dil',
      dataIndex: 'langCode',
      key: 'langCode',
    },
    {
      title: 'Soru',
      dataIndex: 'question',
      key: 'question',
    },

    {
      title: 'İşlemler',
      dataIndex: '_id',
      key: '_id',
      render: (record) => {
        if (willAddQuestion.includes(record)) {
          return (
            <div>
              <button
                className="btn btn-danger"
                onClick={() => {
                  const filteredArr = [];
                  // eslint-disable-next-line array-callback-return
                  willAddQuestion.filter((question) => {
                    if (question !== record) {
                      filteredArr.push(question);
                    }
                  });
                  setWillAddQuestion(filteredArr);
                }}
              >
                Çıkar
              </button>
            </div>
          );
        }
        return (
          <div>
            <button
              className="btn btn-success"
              onClick={() => {
                const newArr = [...willAddQuestion];
                newArr.push(record);
                setWillAddQuestion(newArr);
              }}
            >
              Ekle
            </button>
          </div>
        );
      },
    },
  ];

  const cleanForm = () => {
    setLangCode('en');
    setDifficulty('kolay');
    setTitle('');
    setExp('');
    setWillAddQuestion([]);
  };
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Quiz Hazırla</DialogTitle>
      <DialogContent>
        <div>
          <h6>Başlık</h6>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            name="title"
            id="title"
            className="form-control"
          />
          <h6>Exp</h6>
          <input
            onChange={(e) => {
              setExp(e.target.value);
            }}
            type="text"
            name="exp"
            id="exp"
            className="form-control"
          />
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

          <p>
            Seçilen toplam soru <b>{willAddQuestion.length}</b>{' '}
          </p>
          <Table columns={columns} dataSource={questions} />
        </div>
      </DialogContent>
      <DialogActions>
        <button
          onClick={() => {
            if (
              title.length > 0 &&
              exp &&
              difficulty &&
              willAddQuestion &&
              langCode
            ) {
              dispatch(
                postQuiz({
                  title: title,
                  exp: exp,
                  difficult: difficulty,
                  questions: willAddQuestion,
                  currentLangCode: langCode,
                })
              );
            } else {
              alert('Herhangi bir soru eklenmedi.');
            }

            cleanForm();

            onClose();
          }}
          className="btn btn-success"
        >
          Tamamla
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default AddQuizDialog;
