import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi'; // Correctly import BiShow
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

import BookModel from './BookModel';

const BookSingleCard = ({ book }) => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="border-2 border-gray-200 rounded-lg px-4 py-2 m-4 relative hover:shadow hover:bg-gray-100 shadow">
      <h4 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {book.publishYear}
      </h4>
      <h7 className="my-2 text-gray-500">{book._id}</h7>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h5 className="my-1">{book.title}</h5>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h5 className="my-1">{book.author}</h5>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModel(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
      {showModel && <BookModel book={book} onClose={() => setShowModel(false)} />}
    </div>
  );
};

export default BookSingleCard;