import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { getCategoryWordsById } from '../../redux/slicer/category';

const AddWordToCategory = ({ isOpen, onClose, category }) => {
  const includeWords = useSelector((state) => state.categories.includeWords);
  const words = useSelector((state) => state.words.words);
  const dispatch = useDispatch();
  console.log('kelimeler', words);
  useEffect(() => {
    dispatch(getCategoryWordsById(category));
  }, [category, dispatch]);

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
        return <button className="btn btn-danger">Çıkar</button>;
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
            columns={columns}
            dataSource={includeWords}
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
