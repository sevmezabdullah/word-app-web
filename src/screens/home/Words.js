import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWords } from '../../redux/slicer/words';
import { Table } from 'antd';
const Words = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.words.words);
  useEffect(() => {
    dispatch(getAllWords());
  }, [dispatch]);

  const columns = [
    {
      title: 'Word ID',
      dataIndex: '_id',
      key: '_id',
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
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="btn btn-success"
          style={{ padding: 10, margin: 10 }}
        >
          Kelime Ekle
        </button>
      </div>
    </>
  );
};

export default Words;
