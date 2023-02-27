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
  addWordToCategoryHandler,
  fillAllWords,
  compareLists,
  getCategoryWordsById,
} from '../../redux/slicer/category';
import { getAllWords } from '../../redux/slicer/words';

const AddWordToCategory = ({ isOpen, onClose, category }) => {
  const dispatch = useDispatch();
  const includeWords = useSelector((state) => state.categories.includeWords);
  const words = useSelector((state) => state.words.words);

  useEffect(() => {
    if (category !== null) {
      dispatch(getCategoryWordsById(category));
      dispatch(getAllWords());
      dispatch(fillAllWords({ words: words }));
      dispatch(compareLists({ words: words, includeWords: includeWords }));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, category]);

  const columns = [
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
      title: 'İşlemler',
      render: (record) => {
        return (
          <button onClick={(e) => {}} className="btn btn-danger">
            Çıkar
          </button>
        );
      },
    },
  ];

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
      title: 'İşlemler',
      render: (record) => {
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
              // dispatch(getCategoryWordsById(category));

              dispatch(addWordToCategoryHandler(record));
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
          <h5>İçindeki kelimeler</h5>
          <Table
            rowKey={(record) => record._id}
            columns={columns}
            dataSource={includeWords}
          />
        </div>
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
            dispatch(getCategoryWordsById(category));
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
