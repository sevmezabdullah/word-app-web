import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWords } from '../../redux/slicer/words';
import { Table } from 'antd';
import AddWordDialog from '../../components/dialogs/AddWordDialog';
import WordDetailDialog from '../../components/dialogs/WordDetailDialog';
const Words = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.words.words);

  const [isWordDetailDialogOpen, setIsWordDetailDialogOpen] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
  const [isAddWordDialogOpen, setIsWordDialogOpen] = useState(false);

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
              console.log(record);
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
      dataIndex: 'process',
      key: 'process',
      width: 200,
      render: (record) => {
        return (
          <div>
            <button style={{ marginRight: 10 }} className="btn btn-warning">
              Düzenle
            </button>
            <button className="btn btn-danger">Sil</button>
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
            }}
            className="btn btn-success"
            style={{ padding: 10, margin: 10 }}
          >
            Toplu Kelime Ekle (Excel)
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
      </div>
    </>
  );
};

export default Words;
