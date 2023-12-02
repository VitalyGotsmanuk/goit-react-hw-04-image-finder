import '../index.css';
import React from 'react';

import { useState, useEffect } from 'react';
//import { Component } from 'react';
//import { nanoid } from 'nanoid';

import axios from 'axios';
import { Notify } from 'notiflix'; 

import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export const App = () => {

  const [searchQuery, setSearchQuery] = useState('');
  
  const [pictures, setPictures] = useState([]);
  const [totalPictures, setTotalPictures] = useState(0);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [modalData, setModalData] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const perPage = 12;

  const fetchPictures = async () => {
    try {
      setIsLoading(true)

      const urlApi = `https://pixabay.com/api/`;
      
      const params = new URLSearchParams({
        q: searchQuery,
        key: `39251396-18173d9ed82e61dff39932134`,
        image_type: `photo`,
        orientation: `horizontal`,
        safesearch: `true`,
        page: page,
        per_page: perPage,
      });

      const { data } = await axios.get(`${urlApi}?${params}`);

      let allPict = data.totalHits;
      let totalPages = Math.ceil(allPict/perPage);
     
      //console.log(data.totalHits);

      setPictures(data.hits);
      setTotalPictures(allPict);
      setTotalPages(totalPages)
    }
    catch (error) {
      setError({error: error.message})
    }
    finally {
      setIsLoading(false)
    }
  }

  const openModal = (dataForModal) => {
    setIsOpenModal(true);
    setModalData(dataForModal);
  }

  const closeModal = () => {
    setIsOpenModal(false);
    setModalData(null);
  }

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  }

  const handleSearch = (event) => {
    event.preventDefault();
    setPage(1);

    const searchQuery = event.currentTarget.elements.searchQuery.value.trim();

    if (searchQuery === "") {
      Notify.warning(`Attention! Field must be filled.`);
    }
    else { 
      fetchPictures();

      //  if(totalPictures === 0) {
      //       Notify.warning(`Sorry, there are no images matching your search query. Please try again.`);
      //   } else {
      //       Notify.success(`Hooray! We found ${totalPictures} images.`);
      // }
      
    //console.log("Submit", searchQuery)

    //console.log("Totall", totalPictures)
    }
  }
  
  const handleClick = () => {
    setPage(prevState => prevState +1);
    
    //console.log(page)
  }  

  useEffect(() => {
    if (page > 1) {
        fetchPictures();
    }
   
  }, [page])

  // componentDidUpdate(_, prevState) {
  //   if (prevState.page !== this.state.page) { 
  //     this.fetchPictures();
  //     }
  // }

  return (
      <>{/* <h1>4-th Image Gallery HW! 🐱‍🏍</h1> */}
        <Searchbar
          searchQuery={searchQuery}
          onChange={handleInputChange}
          handleSearch={handleSearch}    
        />
        {isLoading && <Loader/>}
        {error !== null && (
          <p className="error-bage">
            Oops, some error occured... {error}
          </p>
        )}
       
        <ImageGallery
          pictures={pictures}
          openModal={openModal}
        >                  
        </ImageGallery>

        {totalPages > page &&
          <Button
            handleClick={handleClick}
          />}

        {isOpenModal && <Modal
          closeModal={closeModal}
          modalData={modalData}
        />}
      </>
    );
  }