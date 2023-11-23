
import { useState } from 'react';

function ClarifionUpsell() {
 
    const items = [
      <div key="guarantee" className="flex items-stretch justify-between gap-2" style={{ overflowX: 'hidden'}}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b1e9d8b-c663-4daa-b4ee-15bc663d1ee3?apiKey=41a8a15f521e4a3aa754b5984847c314&"
              className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-white text-xs font-medium leading-3 capitalize self-center grow whitespace-nowrap my-auto">
              30-DAY SATISFACTION GUARANTEE
            </div>
          </div>,
          <div key="delivery" className="flex items-stretch justify-between gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae24f438-8ee0-41ce-b6b0-eb67bb219ee3?apiKey=41a8a15f521e4a3aa754b5984847c314&"
              className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-white text-xs font-medium leading-3 uppercase self-center grow whitespace-nowrap my-auto">
              Free delivery on orders over $40.00
            </div>
          </div>,
          <div key="happy" className="flex items-stretch justify-between gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/63e88a3b-266a-48ee-a9e2-406228fa26bb?apiKey=41a8a15f521e4a3aa754b5984847c314&"
              className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-white text-xs font-medium leading-3 capitalize self-center grow whitespace-nowrap my-auto">
              50.000+ HAPPY CUSTOMERS
            </div>
          </div>,
          <div key="money" className="flex items-stretch justify-between gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/50555365-98dd-4cb4-b632-43d25def105c?apiKey=41a8a15f521e4a3aa754b5984847c314&"
              className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-white text-xs font-medium leading-3 uppercase self-center grow whitespace-nowrap my-auto">
              100% Money Back Guarantee
            </div>
          </div>
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextItem = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };
  
    const prevItem = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };
  
    const isSmallScreen = window.innerWidth <= 600;



  return (
    <div className="bg-white flex flex-col items-stretch overscroll-auto font-sans" >
      <div key="nav" className="bg-slate-800 flex w-full flex-col items-center py-3.5 max-md:justify-center">
        <div className="flex w-full max-w-[1230px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-nowrap max-md:justify-center overflow-auto">
        {isSmallScreen ?  
        <div className="mt-4 flex items-center relative">
        <button style={{ background: "none"}} onClick={prevItem}>
          <img src="./arrow-left-335-svgrepo-com.png" alt="previous" className='w-5'/>
        </button>
        <div className="flex-grow">{items[currentIndex]}</div>
        <button style={{ background: "none"}} onClick={nextItem}>
          <img src="./arrow-right-336-svgrepo-com.png" alt="next" className='w-5' />
        </button>
      </div>
        :
        <div className="flex w-full max-w-[1234px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-nowrap max-md:justify-center overflow-auto">
        <div key="guarantee" className="flex items-stretch justify-between gap-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b1e9d8b-c663-4daa-b4ee-15bc663d1ee3?apiKey=41a8a15f521e4a3aa754b5984847c314&"
          className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-xs font-medium leading-3 capitalize self-center grow whitespace-nowrap my-auto">
          30-DAY SATISFACTION GUARANTEE
        </div>
      </div>
      <div key="delivery" className="flex items-stretch justify-between gap-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae24f438-8ee0-41ce-b6b0-eb67bb219ee3?apiKey=41a8a15f521e4a3aa754b5984847c314&"
          className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-xs font-medium leading-3 uppercase self-center grow whitespace-nowrap my-auto">
          Free delivery on orders over $40.00
        </div>
      </div>
      <div key="happy" className="flex items-stretch justify-between gap-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/63e88a3b-266a-48ee-a9e2-406228fa26bb?apiKey=41a8a15f521e4a3aa754b5984847c314&"
          className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-xs font-medium leading-3 capitalize self-center grow whitespace-nowrap my-auto">
          50.000+ HAPPY CUSTOMERS
        </div>
      </div>
      <div key="money" className="flex items-stretch justify-between gap-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/50555365-98dd-4cb4-b632-43d25def105c?apiKey=41a8a15f521e4a3aa754b5984847c314&"
          className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-xs font-medium leading-3 uppercase self-center grow whitespace-nowrap my-auto">
          100% Money Back Guarantee
        </div>
      </div>
      </div>
        }
        </div>
      </div>
      <div key="titleIcons" className="justify-between shadow-md items-center bg-white p-3 flex flex-col max-md:max-w-full">
        <div className="flex w-full max-w-[1200px] items-stretch justify-between max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/43482333-ab86-4a21-ae2d-ad4ed08bda05?apiKey=41a8a15f521e4a3aa754b5984847c314&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/43482333-ab86-4a21-ae2d-ad4ed08bda05?apiKey=41a8a15f521e4a3aa754b5984847c314&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43482333-ab86-4a21-ae2d-ad4ed08bda05?apiKey=41a8a15f521e4a3aa754b5984847c314&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/43482333-ab86-4a21-ae2d-ad4ed08bda05?apiKey=41a8a15f521e4a3aa754b5984847c314&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/43482333-ab86-4a21-ae2d-ad4ed08bda05?apiKey=41a8a15f521e4a3aa754b5984847c314&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43482333-ab86-4a21-ae2d-ad4ed08bda05?apiKey=41a8a15f521e4a3aa754b5984847c314&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/43482333-ab86-4a21-ae2d-ad4ed08bda05?apiKey=41a8a15f521e4a3aa754b5984847c314&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/43482333-ab86-4a21-ae2d-ad4ed08bda05?apiKey=41a8a15f521e4a3aa754b5984847c314&"
            className="aspect-[5.33] m-0.5 object-contain object-center w-full overflow-hidden shrink-0 flex-1 max-w-[200px] max-md:max-w-[100px]"
          />
          <div className="items-stretch self-center flex justify-between gap-5 my-auto ml-px">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fda142c-2898-4eaa-99a3-bf317b95fead?apiKey=41a8a15f521e4a3aa754b5984847c314&"
              className="aspect-[2.75] object-contain object-center w-[88px] overflow-hidden shrink-0 max-w-full max-md:max-w-[50px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/989efb84-2a4e-412a-b5d0-076c603832cf?apiKey=41a8a15f521e4a3aa754b5984847c314&"
              className="aspect-[2.56] object-contain object-center w-[82px] overflow-hidden shrink-0 max-w-full max-md:max-w-[50px]"
            />
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }} className="text-black text-5xl leading-10 capitalize object-center z-[1] mt-0 whitespace-wrap max-md:max-w-full max-md:text-base justify-center max-md:leading-10 flex ">
        <h1 className="text-black font-normal flex self-center">
          Wait! Your order is in progress.
        </h1>
      </div>
      <div className="text-neutral-600 text-xl leading-6 capitalize self-center mt-px max-md:max-w-full max-md:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
      </div>
      <div key="steps" className="justify-between items-stretch self-center flex max-w-[1245px] gap-5 max-md:max-w-full max-md:flex-nowrap max-md:justify-center">
        {isSmallScreen? 
        <div className="justify-between items-stretch self-center flex max-w-[1245px] gap-5 mt-10 px-1 max-md:max-w-full max-md:flex-nowrap max-md:justify-center max-md:mt-5">
        <div className="flex-row items-center justify-between">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a70f093a-a76d-439d-97d2-a141a355f6db?apiKey=41a8a15f521e4a3aa754b5984847c314&"
          className="aspect-square object-contain object-center mb-1 w-7 ml-4 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-black text-xl leading-6 capitalize self-center grow whitespace-nowrap my-auto max-md:text-sm">
          Cart Review
        </div>
      </div>
      <div className="items-stretch flex-row justify-between gap-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c10b5eca-9270-45f7-aea7-7231c9ce3521?apiKey=41a8a15f521e4a3aa754b5984847c314&"
          className="aspect-square object-contain object-center mb-1 w-7 ml-4 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-black text-xl leading-6 capitalize self-center whitespace-nowrap my-auto max-md:text-sm">
          Checkout
        </div>
      </div>
      <div className="items-stretch flex-row justify-between gap-5">
        <img
          loading="lazy"
          src="./number12-svgrepo-com.png"
          className="aspect-square object-contain object-center w-8 ml-4 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-black text-xl font-bold leading-6 capitalize self-center grow whitespace-nowrap max-md:text-sm">
          Special Offer
        </div>
      </div>
      <div className="items-stretch flex-row justify-between gap-5">
      <img
          loading="lazy"
          src="./number-circle-four-thin-svgrepo-com (1).png"
          className="aspect-square object-contain object-center self-center w-8 ml-4 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-black text-xl leading-6 capitalize self-center grow whitespace-nowrap  max-md:text-sm">
          Confirmation
        </div>
      </div>
      </div>
        :
        <div className="justify-between items-stretch self-center flex max-w-[1245px] gap-5 mt-16 mb-8 px-5 max-md:max-w-full max-md:flex-nowrap max-md:justify-center max-md:mt-10">
        <div className="items-stretch flex justify-between gap-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a70f093a-a76d-439d-97d2-a141a355f6db?apiKey=41a8a15f521e4a3aa754b5984847c314&"
            className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-black text-xl leading-6 capitalize self-center grow whitespace-nowrap my-auto max-md:text-sm">
            Step 1 : Cart Review
          </div>
        </div>
        <div className="items-stretch flex justify-between gap-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c10b5eca-9270-45f7-aea7-7231c9ce3521?apiKey=41a8a15f521e4a3aa754b5984847c314&"
            className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-black text-xl leading-6 capitalize self-center grow whitespace-nowrap my-auto max-md:text-sm">
            Step 2 : Checkout
          </div>
        </div>
        <div className="items-stretch flex justify-between gap-5">
            <img
              loading="lazy"
              src="./number12-svgrepo-com.png"
              className="aspect-square object-contain object-center w-12 ml-2 overflow-hidden shrink-0 max-w-full"
            />
          <div className="text-black text-xl font-semibold leading-6 capitalize self-center grow whitespace-nowrap my-auto max-md:text-sm">
            Step 3 : Special Offer
          </div>
        </div>
        <div className="items-stretch flex justify-between gap-5">
            <img
              loading="lazy"
              src="./number-circle-four-thin-svgrepo-com (1).png"
              className="aspect-square object-contain object-center self-center w-12 ml-2 overflow-hidden shrink-0 max-w-full"
            />
          <div className="text-black text-xl leading-6 capitalize self-center grow whitespace-nowrap my-auto max-md:text-sm">
            Step 4 : Confirmation
          </div>
        </div>
        </div>
      }
      </div>
      <div className="bg-neutral-50 self-center flex max-w-[1230px] px-7 py-5 rounded-xl max-md:max-w-full max-md:flex-col md:flex-row">
        {isSmallScreen? null : 
        <div key="product1" className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
              <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7fb44d66-abb8-4012-bdcd-c99c50f95807?apiKey=41a8a15f521e4a3aa754b5984847c314&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fb44d66-abb8-4012-bdcd-c99c50f95807?apiKey=41a8a15f521e4a3aa754b5984847c314&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fb44d66-abb8-4012-bdcd-c99c50f95807?apiKey=41a8a15f521e4a3aa754b5984847c314&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fb44d66-abb8-4012-bdcd-c99c50f95807?apiKey=41a8a15f521e4a3aa754b5984847c314&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fb44d66-abb8-4012-bdcd-c99c50f95807?apiKey=41a8a15f521e4a3aa754b5984847c314&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fb44d66-abb8-4012-bdcd-c99c50f95807?apiKey=41a8a15f521e4a3aa754b5984847c314&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fb44d66-abb8-4012-bdcd-c99c50f95807?apiKey=41a8a15f521e4a3aa754b5984847c314&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7fb44d66-abb8-4012-bdcd-c99c50f95807?apiKey=41a8a15f521e4a3aa754b5984847c314&"
              className="aspect-[0.97] object-contain object-center overflow-hidden max-md:max-w-full"
                />
                <div className="bg-white flex flex-col mt-6 p-6 rounded-xl max-md:max-w-full max-md:px-5">
                <div className="items-stretch flex w-[237px] max-w-full gap-3.5 pr-px">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f65d1dcd-f38c-4ee1-8ddd-5a43a6a6c3a7?apiKey=41a8a15f521e4a3aa754b5984847c314&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f65d1dcd-f38c-4ee1-8ddd-5a43a6a6c3a7?apiKey=41a8a15f521e4a3aa754b5984847c314&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f65d1dcd-f38c-4ee1-8ddd-5a43a6a6c3a7?apiKey=41a8a15f521e4a3aa754b5984847c314&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f65d1dcd-f38c-4ee1-8ddd-5a43a6a6c3a7?apiKey=41a8a15f521e4a3aa754b5984847c314&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f65d1dcd-f38c-4ee1-8ddd-5a43a6a6c3a7?apiKey=41a8a15f521e4a3aa754b5984847c314&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f65d1dcd-f38c-4ee1-8ddd-5a43a6a6c3a7?apiKey=41a8a15f521e4a3aa754b5984847c314&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f65d1dcd-f38c-4ee1-8ddd-5a43a6a6c3a7?apiKey=41a8a15f521e4a3aa754b5984847c314&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f65d1dcd-f38c-4ee1-8ddd-5a43a6a6c3a7?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                    className="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="self-center flex grow basis-[0%] flex-col items-center my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bd96e7f-a330-4b99-b835-64ee2b7cccf7?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                      className="aspect-[14.58] object-contain object-left w-[175px] overflow-hidden mr-0"
                    />
                    <div className="items-center self-stretch flex gap-2.5 mt-2 max-md:justify-center">
                      <div className="text-zinc-800 text-sm font-bold leading-4 self-stretch">
                        Ken T.
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/93f1d988-4953-4540-8a10-8c835b43bc10?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                      />
                      <div className="text-emerald-400 text-xs leading-4 whitespace-nowrap my-auto">
                        Verified Customer
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-neutral-600 text-base leading-6 mt-5 max-md:max-w-full">
                  “As soon as the Clarifions arrived I put one in my bedroom.
                  This was late in the afternoon. When I went to the bedroom in
                  the evening it smelled clean. When I went to bed I felt I
                  could breathe better. Wonderful.”
                </div>
              </div>
            </div>
        </div>}
        <div key="product2" className="gap-5 flex px-7 max-md:flex-col mb-2 p-px max-md:items-stretch max-md:gap-0 max-md:flex-wrap">
          <div className="flex flex-col items-stretch w-[100%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-start flex flex-col max-md:max-w-full max-md:mt-px md:flex-wrap">
              <div className="self-stretch max-md:max-w-full">
              <div style={{ textAlign: 'center', fontSize: '2rem' }} className="self-stretch text-black my-2 font-normal leading-10 capitalize max-md:max-w-full max-md:text-xl">
                <span className="text-blue-500 ">ONE TIME ONLY</span>
                <span className="text-black ">
                  {" "}
                  special price
                </span>
                <span className="text-black ">
                {" "}
                for 6 extra Clarifion for only{" "}
                </span>
                <span className="text-blue-500 ">$14 each</span>
                <span className="text-black "> ($84.00 total!)</span>
              </div>
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="self-stretch mt-8 max-md:max-w-full max-sm:self-center">
          <div className="gap-5 flex flex max-md:flex-row max-md:items-stretch max-md:gap-0">
            <div className="flex items-stretch self-center w-full max-md:w-3/12 max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/537aacc1-3b12-43cb-b89d-bf3da9c371e3?apiKey=41a8a15f521e4a3aa754b5984847c314&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/537aacc1-3b12-43cb-b89d-bf3da9c371e3?apiKey=41a8a15f521e4a3aa754b5984847c314&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/537aacc1-3b12-43cb-b89d-bf3da9c371e3?apiKey=41a8a15f521e4a3aa754b5984847c314&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/537aacc1-3b12-43cb-b89d-bf3da9c371e3?apiKey=41a8a15f521e4a3aa754b5984847c314&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/537aacc1-3b12-43cb-b89d-bf3da9c371e3?apiKey=41a8a15f521e4a3aa754b5984847c314&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/537aacc1-3b12-43cb-b89d-bf3da9c371e3?apiKey=41a8a15f521e4a3aa754b5984847c314&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/537aacc1-3b12-43cb-b89d-bf3da9c371e3?apiKey=41a8a15f521e4a3aa754b5984847c314&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/537aacc1-3b12-43cb-b89d-bf3da9c371e3?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                className="aspect-square object-contain self-center object-center w-[134px] overflow-hidden shrink-0 max-w-full max-md:mt-6"
              />
            </div>
            <div className="flex flex-col items-stretch w-full ml-5 max-md:w-9/12 max-md:ml-5">
              <div className="items-stretch flex grow flex-col mt-px">
              <div className="grid grid-cols-2 gap-7 items-center w-[200px] max-md:w-full">
              <div className="flex flex-nowrap text-black text-base w-[150px] leading-7 mr-5 capitalize max-md:text-sm ">
                Clarifion Air Ionizer
              </div>
              <div className="flex justify-end w-[200px] items-center gap-2.5 max-md:w-full">
                <div className="text-neutral-400 text-base font-semibold leading-7 capitalize my-auto">
                  $180
                </div>
                <div className="text-blue-500 text-2xl font-semibold leading-8 capitalize whitespace-nowrap">
                  $84
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8513e1f-0964-43c4-9527-be9d9c9716e5?apiKey=41a8a15f521e4a3aa754b5984847c314&"
              className="aspect-[5.44] object-contain object-center w-[98px] overflow-hidden max-w-full mt-1 self-start"
            />
            <div className="items-center flex w-[136px] max-w-full gap-4 mt-4 self-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9616e353-4aa4-45aa-9721-c020bdccb5d2?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="text-slate-700 text-base font-light leading-6 self-stretch grow whitespace-nowrap">
                12 left in Stock
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                </div>
        <div className="text-neutral-600 text-base leading-6 mt-4 max-md:text-sm">
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </div>
              </div>
              <div className="items-stretch self-stretch flex justify-between gap-3 mt-8 max-md:max-w-full ">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bb57102-af02-465e-9414-331314b09042?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                  className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-neutral-600 text-base leading-7 self-center grow shrink basis-auto my-auto max-md:max-w-full max-md:text-sm">
                  <span className="">Negative Ion Technology may</span>
                  <span className="font-bold"> help with allergens</span>
                </div>
              </div>
              <div className="items-stretch flex w-[323px] max-w-full gap-3 mt-4 self-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/668a632e-c9b0-4f89-83a4-75967a66e2f4?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                  className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-neutral-600 text-base leading-7 self-center grow whitespace-nowrap my-auto max-md:text-sm">
                  <span className="">Designed for</span>
                  <span className="font-bold"> air rejuvenation</span>
                </div>
              </div>
              <div className="items-stretch self-stretch flex justify-between gap-3 mt-4 max-md:max-w-full max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ab5d3c9-443a-430d-8dcd-74ed7a33421c?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                  className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-neutral-600 text-base leading-7 self-center grow whitespace-nowrap my-auto max-md:max-w-full max-md:text-sm">
                  <span className="font-bold">Perfect for every room</span>
                  <span className=""> in all types of places.</span>
                </div>
              </div>
              <div className="bg-indigo-50 self-stretch flex flex-col mt-8 px-4 py-3 rounded-xl max-md:max-w-full">
                <div className="items-stretch flex w-[449px] max-w-full gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/127b3fc0-fbb3-4efd-9e1b-c7335e2a8307?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                    className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full max-md:w-7"
                  />
                  <div className="text-blue-500 text-base leading-6 self-center grow whitespace-wrap my-auto">
                    <span className="text-black">Save </span>
                    <span className="text-blue-500">53%</span>
                    <span className="text-black"> and get </span>
                    <span className="text-blue-500">6 extra Clarifision</span>
                    <span className="text-black"> for only </span>
                    <span className="text-blue-500">$14 Each</span>
                    <span className="text-black">.</span>
                  </div>
                </div>
              </div>
              <button onClick={null} className="justify-center items-center object-center self-stretch bg-lime-600 flex flex-col mt-8 px-5 py-4 rounded-[50px] max-md:max-w-full pointer-events-auto">
                <div className="items-stretch flex w-[298px] max-w-full gap-5">
                  <div className="text-white self-center text-xl font-normal leading-7 uppercase grow shrink basis-auto ml-auto">
                    Yes - Claim my discount
                  </div>
                </div>
              </button>
              <div className="justify-center items-start self-stretch rounded border flex gap-4 mt-3 px-3.5 py-2 border-solid border-stone-300 max-md:max-w-full max-md:flex-wrap">
                <div className="text-neutral-600 text-xs leading-4 capitalize self-stretch">
                  Free shipping
                </div>
                <div className="bg-stone-300 self-stretch w-px shrink-0 h-4" />
                <div className="items-stretch self-center flex gap-2.5 my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/15759949-92da-4196-8243-2bc35f39ff73?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                    className="aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-neutral-600 text-center text-xs leading-5 capitalize grow whitespace-nowrap self-start">
                    Secure 256-bit SSL encryption.
                  </div>
                </div>
                <div className="bg-stone-300 self-stretch w-px shrink-0 h-4" />
                <div className="justify-center items-stretch flex gap-0.5 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/48bb3daf-d2b0-4110-a249-a85745f89f74?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                    className="aspect-[1.71] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba2c7647-69a4-41b5-a7a8-da6cb859c763?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                    className="aspect-[1.71] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d9980f6-5634-4a36-a660-864900c459c9?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                    className="aspect-[1.71] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/474b762b-c2de-49a9-986d-1f0b95139f1f?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                    className="aspect-[1.71] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0477c2c5-6d9b-4b37-9f0f-5d02f1c8e080?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                    className="aspect-[1.71] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/449e426f-216a-4e7b-92a1-151f2fa2154c?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                    className="aspect-[1.71] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8bf3f08-2a7e-4df3-a477-532256a2b808?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                    className="aspect-[1.71] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                </div>
              </div>
              <div className="text-red text-lg font-medium leading-6 underline uppercase self-center whitespace-nowrap mt-5">
                No thanks, I don’t want this.
              </div>
              <div className="items-stretch self-stretch flex justify-between gap-4 mt-8 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4a880b98-e837-4dc7-99d6-39ef13830b66?apiKey=41a8a15f521e4a3aa754b5984847c314&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a880b98-e837-4dc7-99d6-39ef13830b66?apiKey=41a8a15f521e4a3aa754b5984847c314&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a880b98-e837-4dc7-99d6-39ef13830b66?apiKey=41a8a15f521e4a3aa754b5984847c314&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a880b98-e837-4dc7-99d6-39ef13830b66?apiKey=41a8a15f521e4a3aa754b5984847c314&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a880b98-e837-4dc7-99d6-39ef13830b66?apiKey=41a8a15f521e4a3aa754b5984847c314&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a880b98-e837-4dc7-99d6-39ef13830b66?apiKey=41a8a15f521e4a3aa754b5984847c314&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a880b98-e837-4dc7-99d6-39ef13830b66?apiKey=41a8a15f521e4a3aa754b5984847c314&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a880b98-e837-4dc7-99d6-39ef13830b66?apiKey=41a8a15f521e4a3aa754b5984847c314&"
                  className="aspect-square object-contain object-center w-[88px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-neutral-600 text-base leading-6 self-center grow shrink basis-auto my-auto max-md:max-w-full">
                  <span className="">
                    If you are not completely thrilled with your Clarifion - We
                    have a{" "}
                  </span>
                  <span className="font-bold">
                    30 day satisfaction guarantee
                  </span>
                  <span className="">
                    . Please refer to our return policy at the bottom of the
                    page for more details. Happy Shopping!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }} className="bg-slate-800 flex flex-col mt-16 px-5 py-8 max-md:max-w-full max-md:mt-10">
  <div className="flex justify-center w-full max-w-[1254px] items-stretch gap-5 max-md:max-w-full max-md:flex-wrap">
    <div className="items-stretch rounded flex gap-4 max-md:justify-center">
      <div className="text-white text-base leading-6 capitalize max-md:text-sm">
        Copyright (c) 2023
      </div>
      <div className="bg-white w-px shrink-0 h-6" />
      <div className="text-white text-base self-center leading-6 upercase whitespace-nowrap max-md:text-sm">
        Made by Krisbel Rosas
      </div>
    </div>
    <div className="items-stretch self-center flex gap-4 my-auto">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/760fe0f0-1a0c-4f2d-9f43-0672b42edea2?apiKey=41a8a15f521e4a3aa754b5984847c314&"
        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
      />
      <div className="text-white text-center text-base leading-6 capitalize self-center grow whitespace-nowrap max-md:text-sm">
        Secure 256-bit SSL encryption.
      </div>
    </div>
  </div>
</div>
    </div>
  );
}



export default ClarifionUpsell;