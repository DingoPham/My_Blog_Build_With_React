import React, { useState } from 'react';

function Pagination({ images, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handleClick = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleInputChange = (e) => {
    const page = Number(e.target.value);
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className="flex flex-wrap gap-41">
        {currentItems.map((image, index) => (
          <img className='pic-value' key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <div className="flex m-5 justify-center items-center">
        <button className='w-60 h-60' onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
          &lt;
        </button>
        <input className='w-30 h-30'
          type="number"
          min="1"
          max={totalPages}
          value={currentPage}
          onChange={handleInputChange}
        />
        <button className='w-60 h-60' onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
           &gt;
        </button>
      </div>
      <div className='flex justify-center'>
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
}

export default Pagination;
