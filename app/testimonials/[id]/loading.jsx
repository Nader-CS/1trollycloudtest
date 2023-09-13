import colors from "@app/common/colors";
import Image from "next/image";

const Loading = () => {
  return (
    <div
      className="w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ paddingTop: "250px", backgroundColor: colors.background }}
    >
      <Image
        src="/assets/images/svg-loaders/spinning-circles.svg"
        width={500}
        height={500}
        alt="loader"
        className="object-contain"
      />
    </div>
  );
};

export default Loading;
