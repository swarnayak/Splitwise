import React from 'react';
const MyComponent = () => {
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center" style={{ padding: '25px 50px' }}>
        <div className=''> 
          <img src="./logo/sw-wide.svg" alt="" className='' width={150}/>
        </div>
        <div className=" d-flex gap-3 align-items-center ">
          <div><a className="Log">Log In</a></div>
          <div className=""><button className='sign sign-1'>Sign Up</button></div>
        </div>
      </div>
      

<div className=" slidemain container-fluid " style={{ padding: '30px 150px ' }} >
<div className="row p-5">
  <div className="col text-start">
    <div className="fs-1 fw-bold my-3">
      <div><p className='Less text-left m-0'>Less stress when sharing expenses</p></div>
      <div><p className="ontrip text-left m-0">on trips.</p></div>
    </div>
    <div className="d-flex gap-3 fs-2 opacity-75 my-3">
      <a href="#"><i className="fa-solid fa-plane" style={{ color: '#13bfa3' }} ></i></a>
      <a href="#"><i className="fa-solid fa-house" style={{ color: '#811bac' }} ></i></a>
      <a href="#"><i className="fa-solid fa-heart" style={{ color: '#890606' }}></i></a>
      <a href="#"><i className="fa-solid fa-star" style={{ color: '#74777b' }}></i></a>
    </div>
    <div className="">
      <div><p className="fw-normal my-3">Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</p></div>
      <div><button type="button" className="sign fs-5 text-white rounded border border-0 px-5 py-2 my-3">Sign up</button></div>
      <div><p className="my-3">Free for<i className="fa-brands fa-apple px-1" style={{ color: '#3f4040' }}></i><a href="#" className='text-decoration-none' style={{ color: ' #2d3137' }}>iPhone,</a><i className="fa-brands fa-android px-1" style={{ color: '#3f4040' }}></i><a href="#" className='text-decoration-none' style={{ color: ' #2d3137' }}>Android</a> and web.</p></div>       
    </div>
  </div>

    <div className="col">
    { /*img*/ }
    </div>
</div>
</div>
    

<div className="slide2 container-fluid ">
<div className='row '>
  <div className="balances col pt-5">
      <div className="d-flex flex-column align-items-center">
        <h2 className='fw-bold fs-3'>Track balances</h2>
        <p className='fs-5 slide2-track'>Keep track of shared expenses, balances, and who owes who.</p>
      </div>
      <div className="" >
      <img src="./Image/asset1.png" alt="" className='pt-4' width={300}/>
      </div>
  </div>
  <div className="Split col pt-5">
      <div className="d-flex flex-column align-items-center" >
          <h2 className='fw-bold fs-3'>Organize expenses</h2>
          <p className='fs-5 slide2-track'>Split expenses with any group: trips, housemates, friends, and family</p>
      </div>
      <div className="">
      <img src="./Image/asset2.png" alt="" className='pt-4' width={300}/>
      </div>
  </div>
</div>
<div className='row'>
  <div className="easily col pt-5">
      <div className="d-flex flex-column align-items-center">
          <h2 className='fw-bold fs-3'>Add expenses easily</h2>
          <p className='fs-5 slide2-track'>Quickly add expenses on the go before you forget who paid.</p>
      </div>
      <div className="">
      <img src="./Image/asset3.png" alt="" className='pt-4' width={300}/>
      </div>
  </div>

  <div className="balances col pt-5">
    <div className="d-flex flex-column align-items-center">
        <h2 className='fw-bold fs-3'>Pay friends back</h2>
        <p className='fs-5 slide2-track'>Settle up with a friend and record any cash or online payment.</p>
    </div>
    <div className="">
    <img src="./Image/asset4.png" alt="" className='pt-4' width={300}/>
    </div> 
  </div>
</div>
  </div>

<div className="PRO row ">
  <div className=" col d-flex flex-column align-items-center ">
      <h2>Get even more with PRO</h2>
      <p className='even'>Get even more organized with receipt scanning, charts and graphs, currency conversion, and more!</p>
      <button type="button up">Sign Up</button>
  </div>
  <div className="col d-flex flex-column align-items-center ">
      <img src="./Image/asset5.png" alt="" width={200} />
  </div>
  </div>




      <div id="slide4">
      <div>
    <h1>The whole nine yards</h1>
    </div>
<div id="slide4grid">
  <div className="container ">
  <div className="row">
      <div className="col">
      <div className='d-flex gap-3'><img src='./logo/core-feature.svg'/><p>Add groups and friends</p></div>
      <div className='d-flex gap-3'><img src='./logo/core-feature.svg'/><p>Split expenses, record debts</p></div>
      <div className='d-flex gap-3'><img src='./logo/core-feature.svg'/><p>Equal or unequal splits</p></div>
      <div className='d-flex gap-3'><img src='./logo/core-feature.svg'/><p>Split by % or shares</p></div>
      <div className='d-flex gap-3'><img src='./logo/core-feature.svg'/><p>Calculate total balances</p></div>
      <div className='d-flex gap-3'><img src='./logo/core-feature.svg'/><p>Suggested repayments</p></div>
      <div className='d-flex gap-3'><img src='./logo/core-feature.svg'/><p>Simplify debts</p></div>
      <div className='d-flex gap-3'><img src='./logo/core-feature.svg'/><p>Recurring expenses</p></div>
  </div>
    <div className="col">
      <div className='d-flex gap-3'><img src='./logo/core-feature.svg'/><p>Offline mode</p></div>
      <div className='d-flex gap-3'><img src='./logo/core-feature.svg'/><p>Cloud sync</p></div>
      <div className='d-flex gap-3'><img src='./logo/core-feature.svg'/><p>Spending totals</p></div>
      <div className='d-flex gap-3'><img src='./logo/core-feature.svg'/><p>Categorize expenses</p></div>
      <div className='d-flex gap-3'><img src='./logo/core-feature.svg'/><p>Easy CSV exports</p></div>
      <div className='d-flex gap-3'><img src='./logo/core-feature.svg'/><p>7+ languages</p></div>
      <div className='d-flex gap-3'> <img src='./logo/core-feature.svg'/><p>100+ currencies</p></div>
      <div className='d-flex gap-3'> <img src='./logo/core-feature.svg'/><p>Payment integrations</p> </div>        
    </div>
    <div className="col">
      <div className='d-flex gap-3'> <img src='./logo/pro-feature.svg'/><p>A totally ad-free experience</p></div>
      <div className='d-flex gap-3'><img src='./logo/pro-feature.svg'/><p>Currency conversion</p></div>
      <div className='d-flex gap-3'><img src='./logo/pro-feature.svg'/><p>Receipt scanning</p></div>
      <div className='d-flex gap-3'> <img src='./logo/pro-feature.svg'/><p>Itemization</p></div>
      <div className='d-flex gap-3'> <img src='./logo/pro-feature.svg'/><p>Charts and graphs</p></div>
      <div className='d-flex gap-3'>  <img src='./logo/pro-feature.svg'/><p>Expense search</p></div>
      <div className='d-flex gap-3'>  <img src='./logo/pro-feature.svg'/><p>Save default splits</p></div>
      <div className='d-flex gap-3'>  <img src='./logo/pro-feature.svg'/><p>Early access to new features</p></div>
    </div>
  </div>
  <div className='d-flex justify-content-center gap-5'>
  <div className='d-flex  gap-3'><img src='./logo/core-feature.svg'/><p>Core features</p></div>
  <div className='d-flex gap-3'>  <img src='./logo/pro-feature.svg'/><p>Pro features</p></div>
  </div>
</div>
</div>

    </div>

    <div id="slide5">
    <div className="container text-center">
      <div className=" d-flex gap-3 row" >
        <div className="col border border-light-subtle rounded shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <a href='#' className=' text-decoration-none text-reset '>
        <div className='fs-3 text-start fw-light' >
          <p>"Fundamental" for tracking finances.As good as WhatsApp for conataining awkwardness.</p>
        </div>
        <div className='d-flex   align-items-center py-3' >
          <img src='./Image/ft.png' className="w-25  p-4 "></img><p className="fst-italic fs-5">Financial Times</p>
        </div>
        </a>
        </div>

        <div className="col border border-light-subtle rounded shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <div className='fs-3 text-start fw-light' >
          <p>"Fundamental" for tracking finances.As good as WhatsApp for conataining awkwardness.</p>
        </div>
        <div className='d-flex   align-items-center py-5' >
            <p className="fst-italic fs-5">Ahah S, iOS</p>
        </div>
        </div>

        <div className="col border border-light-subtle rounded shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <a href='#' className=' text-decoration-none text-reset '>
        <div className='fs-3 text-start fw-light' >
          <p>"Fundamental" for tracking finances.As good as WhatsApp for conataining awkwardness.</p>
        </div>
        <div className='d-flex   align-items-center py-3' >
          <img src='./Image/nyt.png' class="w-25  p-4 "></img><p className="fst-italic fs-5">NY Times</p>
        </div>
        </a>
        </div>

      </div>

      <div className=" d-flex gap-3 row" >
      <div className="col border border-light-subtle rounded shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <div className='fs-3 text-start fw-light' >
          <p>"Fundamental" for tracking finances.As good as WhatsApp for conataining awkwardness.</p>
        </div>
        <div className='d-flex   align-items-center py-5' >
            <p className="fst-italic fs-5">Haseena C, Android</p>
        </div>
        </div>

        <div className="col border border-light-subtle rounded shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <a href='#' className=' text-decoration-none text-reset '>
        <div className='fs-3 text-start fw-light' >
          <p>"Fundamental" for tracking finances.As good as WhatsApp for conataining awkwardness.</p>
        </div>
        <div className='d-flex   align-items-center py-3' >
         <img src='./Image/bi.png' class="w-25  p-4 "></img><p className="fst-italic fs-5">Business Insider</p>
        </div>
        </a>
        </div>

        <div className="col border border-light-subtle rounded shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <div className='fs-3 text-start fw-light' >
          <p>"Fundamental" for tracking finances.As good as WhatsApp for conataining awkwardness.</p>
        </div>
        <div className='d-flex   align-items-center py-5' >
            <p className="fst-italic fs-5">Trickseyus, iOS</p>
        </div>
        </div>
  </div>
</div>
    </div>
    </>
  );
};

export default MyComponent;
