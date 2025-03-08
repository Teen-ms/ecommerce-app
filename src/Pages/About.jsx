import React from 'react'
// import Women from './Women'
function About() {
  return (
    <>
     {/* <Women/>; */}
    <div className='About_h1'>

    <div>
        <h1 className="mt-20">About</h1>
    </div>

    <div>
        <h6 className='mt-10'>  
        Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci.<br></br>
         Suspendisse vulputate semper nunc eget rhoncus.
        </h6>
    </div>
<div>
    <p className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie dignissim non eget <br>
    </br>nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet porta sem, interdum <br>
    </br>tincidunt libero. Nulla vel quam lobortis, varius est scelerisque, dapibus nisl.</p>
</div>

<div className='About_background'>
<div className='About_background_left'>
    <h6>The Mission</h6>
    <h3 className='mt-5'>At the heart of<br></br>everything, we set out to<br></br> offer the best quality Product.<br></br> <br></br>Buy it Now...</h3>
    {/* <p className='mr-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequatur ducimus ad, exercitationem consequuntur expedita sequi? Tempore veniam maiores optio, explicabo inventore labore porro perspiciatis nostrum, blanditiis et at officiis.</p> */}
</div>

</div>

<div className='About_box'>
    <h2 className='h-10'>How it Started</h2><br></br>
    <p style={{fontSize:"14px", marginTop:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vero, laborum ullam modi iure quod nihil obcaecati,
     amet eum voluptate mollitia vel debitis. Quo sed vel nemo aspernatur in suscipit.</p>
</div>

<div className='About_how_div'>
    <div className='About_how_div_box left'>
        <h2>Vel mauris molestie <br /> dignissim</h2>
        <h5 style={{fontSize:"16px"}}>Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.</h5>
        <p style={{color:"#00000099",fontSize:"13px"}}>Praesent vel faucibus ligula. Sed sit amet ipsum eget velit<br></br> aliquet faucibus. Maecenas et odio id turpis
         sollicitudin pulvinar <br></br> sit amet vitae augue. Phasellusnec ultricies arcu. Quisque  <br></br> efficitur tellus sit amet bibendum molestie. Duis id egestas odio.
         <br></br> Phasellus lacinia ex quis faucibus tempor. Sed feugia.</p>
    </div>
    <div className='About_how_div_box right'>
        <img src='https://img.freepik.com/free-vector/shopping-online-women-with-smartphone-ecommerce_24877-56063.jpg?t=st=1740581655~exp=1740585255~hmac=9241390816182bae1a48391f6a8c07410b95693da20343f57ef491219e05b164&w=996'></img>
    </div>
</div>

   

    </div>

    </>
  )
}

export default About
