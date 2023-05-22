import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllQuestion,
  deleteQuestion,
  changeSelectedQuestion,
} from '../../redux/slicer/question';
import { Table } from 'antd';
import AddQuestionDialog from '../../components/dialogs/AddQuestionDialog';
import DeleteDialog from '../../components/dialogs/DeleteDialog';
const Questions = () => {
  const dispatch = useDispatch();

  const [isAddQuestionDialogOpen, setIsAddQuestionDialogOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const questions = useSelector((state) => state.question.questions);
  useEffect(() => {
    dispatch(getAllQuestion());
  }, [dispatch]);

  const deleleteQuestion = () => {
    dispatch(deleteQuestion({ id: selectedQuestion }));
  };
  const columns = [
    {
      title: 'Question ID',
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
      title: 'Cevap A',
      dataIndex: 'answerA',
      key: 'answerA',
    },
    {
      title: 'Cevap B',
      dataIndex: 'answerB',
      key: 'answerB',
    },
    {
      title: 'Cevap C',
      dataIndex: 'answerC',
      key: 'answerC',
    },
    {
      title: 'Cevap D',
      dataIndex: 'answerD',
      key: 'answerD',
    },
    {
      title: 'Doğru Cevap',
      dataIndex: 'answerCorrect',
      key: 'answerCorrect',
    },

    {
      title: 'İşlemler',
      dataIndex: '_id',
      key: '_id',
      render: (record) => {
        return (
          <div>
            <button
              onClick={() => {
                dispatch(changeSelectedQuestion({ selectedQuestion: record }));
              }}
              className="btn btn-warning ms-3"
            >
              Düzenle
            </button>
            <button
              onClick={() => {
                setIsDeleteDialogOpen(true);
                setSelectedQuestion(record);
              }}
              className="btn btn-danger ms-3"
            >
              Sil
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="questionBackground">
      <Table
        rowKey={(record) => record._id}
        dataSource={questions}
        columns={columns}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>
          Toplam <b>{questions.length}</b> soru kayıtlı.
        </p>
        <button
          onClick={(e) => {
            setIsAddQuestionDialogOpen(true);
          }}
          className="btn btn-success"
          style={{ padding: 10, margin: 10 }}
        >
          Soru Oluştur
        </button>
      </div>
      <AddQuestionDialog
        isOpen={isAddQuestionDialogOpen}
        onClose={() => {
          setIsAddQuestionDialogOpen(false);
        }}
      />
      <DeleteDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => {
          setIsDeleteDialogOpen(false);
        }}
        deleteFunction={deleleteQuestion}
      />
    </div>
  );
};

export default Questions;
