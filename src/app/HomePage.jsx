import HomeFourthSection from '@/components/HomeFourthSection'
import HomeSecondSection from '@/components/HomeSecondSection'
import HomeThridSection from '@/components/HomeThridSection'
import HomeTopSection from '@/components/HomeTopSection'
import { DataContext } from '@/context/DataContext'
import React, { useContext } from 'react'

const HomePage = () => {
  

    const apiData = useContext(DataContext);


    return (
        <>
           <div className='max-w-7xl mx-auto'>
               <HomeTopSection apiData={apiData}/>
               <HomeSecondSection apiData={apiData}/>
               <HomeThridSection apiData={apiData}/>
               <HomeFourthSection apiData={apiData}/>
           </div>
        </>
    )
}

export default HomePage