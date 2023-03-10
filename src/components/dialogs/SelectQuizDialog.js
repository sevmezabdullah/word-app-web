import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuiz } from '../../redux/slicer/quiz';
import { Table } from 'antd';
import {
  addQuizToCategory,
  deleteQuizFromCategory,
} from '../../redux/slicer/category';

const SelectQuizDialog = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const quizs = useSelector((state) => state.quiz.quizs);
  const currentCategory = useSelector(
    (state) => state.categories.currentCategory
  );
  useEffect(() => {
    dispatch(getAllQuiz());
  }, [dispatch]);

  const column = [
    {
      title: 'Quiz ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Başlık',
      dataIndex: 'title',
      key: '_id',
    },
    {
      title: 'Exp',
      dataIndex: 'exp',
      key: 'exp',
    },
    {
      title: 'Zorluk',
      dataIndex: 'difficult',
      key: 'difficult',
    },
    {
      title: 'İşlem',
      render: (record) => {
        if (currentCategory !== null)
          return (
            <div>
              {currentCategory.quizId !== record._id ? (
                <button
                  onClick={() => {
                    if (
                      currentCategory.quizId === null ||
                      currentCategory.quizId !== record._id
                    ) {
                      dispatch(
                        addQuizToCategory({
                          quizId: record._id,
                          categoryId: currentCategory._id,
                        })
                      );
                    }
                  }}
                  className="btn btn-success"
                >
                  Tanımla
                </button>
              ) : (
                <div>
                  <button
                    onClick={(e) => {
                      dispatch(
                        deleteQuizFromCategory(currentCategory._id)
                      ).unwrap();
                      e.preventDefault();
                    }}
                    className="btn btn-danger"
                  >
                    Çıkar
                  </button>
                </div>
              )}
            </div>
          );
      },
    },
  ];
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Quiz Tanımla</DialogTitle>
      <DialogContent>
        <Table
          rowKey={(rowKey) => rowKey._id}
          columns={column}
          dataSource={quizs}
        />
      </DialogContent>
      <DialogActions>
        <button onClick={onClose} className="btn btn-success">
          Kapat
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectQuizDialog;
