import Image from "next/image";

const Loading = () => {
  return (
    <div className='w-100 d-flex justify-content-center align-items-center'>
      <Image
        src='/assets/images/svg-loaders/spinning-circles.svg'
        width={50}
        height={50}
        alt='loader'
        className='object-contain'
      />
    </div>
  );
};

export default Loading;