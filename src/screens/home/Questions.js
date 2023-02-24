import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestion } from '../../redux/slicer/question';
import { Table } from 'antd';
import AddQuestionDialog from '../../components/dialogs/AddQuestionDialog';
const Questions = () => {
  const dispatch = useDispatch();

  const [isAddQuestionDialogOpen, setIsAddQuestionDialogOpen] = useState(false);
  const questions = useSelector((state) => state.question.questions);
  useEffect(() => {
    dispatch(getAllQuestion());
  }, [dispatch]);
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
      dataIndex: 'correctAnswer',
      key: 'correctAnswer',
    },

    {
      title: 'İşlemler',
      dataIndex: 'process',
      key: 'process',
      render: () => {
        return (
          <div>
            <button className="btn btn-warning">Düzenle</button>
            <button className="btn btn-danger">Sil</button>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <Table dataSource={questions} columns={columns} />
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
    </>
  );
};

export default Questions;