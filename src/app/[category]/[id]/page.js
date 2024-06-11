'use client'
import Detailpage from '@/components/Detailpage';
import DataProvider from '@/context/DataProvider';



const Page = () => {

  return (
    <>

      <DataProvider>
        <Detailpage />
      </DataProvider>

    </>
  );
};

export default Page;

