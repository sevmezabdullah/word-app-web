import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestion } from '../../redux/slicer/question';

const Questions = () => {
  const dispatch = useDispatch();

  const questions = useSelector((state) => state.question.questions);
  useEffect(() => {
    dispatch(getAllQuestion());
  }, [dispatch]);
  return (
    <>
      <div>Sorular</div>
    </>
  );
};

export default Questions;
