import React from 'react'

const LocationSearchPanel = (props) => {
 
    //sample array of loaction
    const location =[
        "Circular road , canara Bank near kapoor cafe, Hathras",
        " 24B near malhotra cafe Sheriyan Coding School,Bhopal",
        "22C near Sharma's Cafe sheriyan coding school ,Mendu"
        
    ]


  return (
    <div>
        {/* sample data*/}

         {
            location.map(function(elem){
                return <div onClick={()=>{
                    props.setvehiclePanel(true)
                    props.setpanelOpen(false)
                }} className = 'flex  gap-4 border-2 py-1 ml-2 border-white active:border-black rounded-xl  my-2 items-center justify-start'>
            <h2 className='bg-[#eee] font-medium h-10 items-center flex justify-center w-10 rounded-full'><i className="ri-map-pin-line"></i></h2>
            <h4 className ='font-medium'>
               {elem}
            </h4>
        </div>

            })
         }




    </div>
  )
}

export default LocationSearchPanel