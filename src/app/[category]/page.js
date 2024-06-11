'use client'
import CategoryPage from '@/components/CategoryPage';
import DataProvider from '@/context/DataProvider';


const Page = () => {
  return (
    <>

      <DataProvider>
        <CategoryPage />
      </DataProvider>

    </>

  );
};

export default Page;
