import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import {
  addWordToCategory,
  getCategoryById,
  getCategoryWordsById,
  removeWordFromCategory,
} from '../../redux/slicer/category';
import { getAllWords } from '../../redux/slicer/words';

const AddWordToCategory = ({ isOpen, onClose, category }) => {
  const dispatch = useDispatch();

  const words = useSelector((state) => state.words.words);
  const currentCategory = useSelector(
    (state) => state.categories.currentCategory
  );

  useEffect(() => {
    if (category !== null) {
      dispatch(getCategoryById(category));
      dispatch(getCategoryWordsById(category));
      dispatch(getAllWords());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, category]);

  const renderStatusColumn = (record) => {
    if (currentCategory.words.includes(record)) {
      return (
        <div>
          <p>Eklendi</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Beklemede</p>
        </div>
      );
    }
  };
  const allWordColumns = [
    {
      title: 'Word ID',
      dataIndex: '_id',
      key: '_id',
      width: 100,
    },
    {
      title: 'Türkçe',
      dataIndex: 'words',
      key: 'words',
      width: 100,
      render: (record) => {
        //TODO
        //sadece türkçe kelimeleri getirecek şekilde tekrar ayarlanacak
        let meaning = null;
        record.forEach((word) => {
          if (word.langCode === 'tr') {
            meaning = word.meaning;
          }
        });
        return <div>{meaning}</div>;
      },
    },
    {
      title: 'Durumu',
      dataIndex: '_id',
      key: '_id',
      render: renderStatusColumn,
    },
    {
      title: 'İşlemler',
      render: (record) => {
        if (currentCategory.words.includes(record._id)) {
          return (
            <button
              onClick={(e) => {
                /*      dispatch(getCategoryWordsById(category)); */
                dispatch(
                  removeWordFromCategory({
                    wordId: record._id,
                    categoryId: category,
                  })
                );
              }}
              className="btn btn-danger"
            >
              Çıkar
            </button>
          );
        }
        return (
          <button
            onClick={(e) => {
              dispatch(
                addWordToCategory({
                  wordId: record._id,
                  categoryId: category,
                  word: record,
                })
              );

              /*      dispatch(getCategoryWordsById(category)); */
            }}
            className="btn btn-success"
          >
            Ekle
          </button>
        );
      },
    },
  ];

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Kategoriye Kelime Ekle</DialogTitle>
      <DialogContent>
        <div>
          <h5>Eklenebilir Kelimeler</h5>
          <Table
            rowKey={(record) => record._id}
            columns={allWordColumns}
            dataSource={words}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <button
          className="btn btn-success"
          onClick={() => {
            onClose();
          }}
        >
          Tamamla
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default AddWordToCategory;
