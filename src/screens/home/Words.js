import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteWord, getAllWords } from '../../redux/slicer/words';
import { Table } from 'antd';
import AddWordDialog from '../../components/dialogs/AddWordDialog';
import WordDetailDialog from '../../components/dialogs/WordDetailDialog';
import AddWordWithExcel from '../../components/dialogs/AddWordWithExcel';
const Words = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.words.words);

  const [isWordDetailDialogOpen, setIsWordDetailDialogOpen] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
  const [isAddWordDialogOpen, setIsWordDialogOpen] = useState(false);
  const [addWordWithExcelDialog, setAddWordWithExcelDialog] = useState(false);
  useEffect(() => {
    dispatch(getAllWords());
  }, [dispatch]);

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
      title: 'İçerik',
      render: (record) => {
        return (
          <button
            onClick={() => {
              setSelectedWord(record);
              setIsWordDetailDialogOpen(true);
            }}
            className="btn btn-success"
          >
            Detaylar
          </button>
        );
      },
    },

    {
      title: 'İşlemler',
      dataIndex: '_id',
      key: '_id',
      width: 200,
      render: (record) => {
        return (
          <div>
            <button
              onClick={(e) => {
                dispatch(deleteWord(record));
              }}
              className="btn btn-danger"
            >
              Sil
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        dataSource={words}
        columns={columns}
        rowKey={(record) => record._id}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>
          Toplam <b>{words.length}</b> kelime kayıtlı.
        </p>

        <div>
          <button
            onClick={(e) => {
              setIsWordDialogOpen(true);
            }}
            className="btn btn-success"
            style={{ padding: 10, margin: 10 }}
          >
            Kelime Ekle
          </button>
          <button
            onClick={(e) => {
              /* setIsWordDialogOpen(true); */
              setAddWordWithExcelDialog(true);
            }}
            className="btn btn-success"
            style={{ padding: 10, margin: 10 }}
          >
            Kelime Ekle (Excel)
          </button>
        </div>

        <AddWordDialog
          isOpen={isAddWordDialogOpen}
          onClose={() => {
            setIsWordDialogOpen(false);
          }}
        />
        <WordDetailDialog
          selectedWord={selectedWord}
          isOpen={isWordDetailDialogOpen}
          onClose={() => {
            setIsWordDetailDialogOpen(false);
          }}
        />
        <AddWordWithExcel
          isOpen={addWordWithExcelDialog}
          onClose={() => {
            setAddWordWithExcelDialog(false);
          }}
        />
      </div>
    </>
  );
};

export default Words;
