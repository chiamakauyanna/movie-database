import { TailSpin } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <TailSpin
        visible={true}
        color="yellow"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </div>
  );
}

export default Loading;