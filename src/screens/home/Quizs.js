import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuiz } from '../../redux/slicer/quiz';
import { Table } from 'antd';

const Quizs = () => {
  const dispatch = useDispatch();
  const quizs = useSelector((state) => state.quiz.quizs);
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
        return <p>{record.questions.length}</p>;
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
          onClick={(e) => {}}
          className="btn btn-success"
          style={{ padding: 10, margin: 10 }}
        >
          Quiz Hazırla
        </button>
      </div>
    </>
  );
};

export default Quizs;
