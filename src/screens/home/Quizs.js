import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteQuiz, getAllQuiz } from '../../redux/slicer/quiz';
import { Table } from 'antd';
import { useState } from 'react';
import AddQuizDialog from '../../components/dialogs/AddQuizDialog';
import { getAllQuestion } from '../../redux/slicer/question';
import DeleteDialog from '../../components/dialogs/DeleteDialog';
const Quizs = () => {
  const dispatch = useDispatch();
  const quizs = useSelector((state) => state.quiz.quizs);
  const [isQuizDialogOpen, setIsQuizDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  useEffect(() => {
    dispatch(getAllQuiz());
  }, [dispatch]);

  const columns = [
    {
      title: 'Quiz ID',
      dataIndex: '_id',
      key: '_id',
      width: 100,
    },
    {
      title: 'Başlık',
      dataIndex: 'title',
      key: 'title',
      width: 200,
    },
    {
      title: 'Zorluk',
      dataIndex: 'difficult',
      key: 'difficult',
      width: 100,
    },
    {
      title: 'Exp',
      dataIndex: 'exp',
      key: 'exp',
      width: 100,
    },
    {
      title: 'Oluşturulma Tarihi',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 250,
    },

    {
      title: 'Soru Sayısı',
      dataIndex: 'questions',
      key: 'questions',
      width: 200,
      render: (record) => {
        return <p>{record.length}</p>;
      },
    },
    {
      title: 'İşlemler',
      width: 100,
      dataIndex: '_id',
      key: '_id',
      render: (record) => {
        return (
          <div>
            <button
              onClick={() => {
                setIsDeleteDialogOpen(true);
              }}
              className="btn btn-danger"
            >
              Sil
            </button>
            <DeleteDialog
              isOpen={isDeleteDialogOpen}
              onClose={() => {
                setIsDeleteDialogOpen(false);
              }}
              deleteFunction={() => {
                dispatch(deleteQuiz({ id: record }));
              }}
            />
          </div>
        );
      },
    },
  ];
  return (
    <>
      <Table dataSource={quizs} columns={columns} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>
          Toplam <b>{quizs.length}</b> quiz kayıtlı.
        </p>
        <button
          onClick={(e) => {
            setIsQuizDialogOpen(true);
            dispatch(getAllQuestion());
          }}
          className="btn btn-success"
          style={{ padding: 10, margin: 10 }}
        >
          Quiz Hazırla
        </button>
      </div>
      <AddQuizDialog
        isOpen={isQuizDialogOpen}
        onClose={() => {
          setIsQuizDialogOpen(false);
        }}
      />
    </>
  );
};

export default Quizs;
